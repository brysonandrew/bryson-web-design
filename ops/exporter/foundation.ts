import path from 'path';
import {
  resolveInputs,
  mergeTargetPackageJson,
  resolveOutput,
} from '../common/utils/exporter/config';
import type {
  TInput,
  TInputConfig,
} from '../common/types/z-exporter';
import { initWorkspaces } from '../common/utils/package-json/files';
import type { TPathRecord } from '../common/types/entries';
import { ISOMORPHIC_TARGETS } from '../common/utils/exporter/constants';
import { INDEX_BASENAME } from '../common/utils/constants';

export const foundation = (
  targets: TPathRecord,
  workspacePath: string,
): TInput[] | void => {
  // let inputs: TInput[] = [];
  const packageJsonsMap = new Map<
    string,
    Record<string, any>
  >();

  try {
    for (const targetName of Object.keys(targets)) {
      const fullTargetPath = path.resolve(workspacePath, targetName);
      const [targetInputs, pattern] = resolveInputs({
        cwd: fullTargetPath,
        dir: targetName,
      });

      const options = {
        transpiler: 'typescript',
        workspacePath,
        include: pattern,
      };
      const nextInputs: TInputConfig[] = [
        ...targetInputs
          .map((input) =>
            path.resolve(fullTargetPath, input),
          )
          .map((input) => {
            const parsed = path.parse(input);
            const name = path.basename(parsed.dir);
            if (name && name !== targetName) {
              return {
                output: resolveOutput({
                  name,
                  input,
                  targetName,
                }),
                options,
              };
            } else {
              return null;
            }
          })
          .filter(Boolean),
        {
          output: resolveOutput({
            name: targetName,
            input: path.join(
              fullTargetPath,
              INDEX_BASENAME,
            ),
            targetName,
          }),
          options,
        },
      ] as TInputConfig[];

      let partialTargetPackageJson = {};
      for (const {
        output,
      } of nextInputs as TInputConfig[]) {
        const {
          name,
          nameDir,
          targetPackageJson,
          packageJson,
        } = output;
        const packageJsonToMerge =
          name === targetName ? packageJson : {};

        partialTargetPackageJson = {
          ...packageJsonToMerge,
          ...partialTargetPackageJson,
          ...mergeTargetPackageJson({
            targetPackageJson: partialTargetPackageJson,
            nextExports: {
              ...(targetPackageJson?.exports || {}),
              ...packageJsonToMerge.exports,
            },
            nextTypesVersions: {
              ...(targetPackageJson?.typesVersions?.['*'] ||
                {}),
              ...(packageJsonToMerge?.typesVersions?.[
                '*'
              ] || {}),
            },
          }),
        };
        packageJsonsMap.set(nameDir, packageJson);
      }
      const targetDir = path.join(workspacePath, targetName);

      packageJsonsMap.set(
        targetDir,
        partialTargetPackageJson,
      );
      // if (ISOMORPHIC_TARGETS.includes(targetName)) {
      //   inputs = [
      //     ...inputs,
      //     ...nextInputs.map(({ options, output }) => ({
      //       options,
      //       ...output,
      //     })),
      //   ];
      // }
    }
    initWorkspaces(packageJsonsMap);
    // return inputs.filter(
    //   ({ input }) => path.extname(input) !== '.json',
    // );
  } catch (error: any) {
    throw Error(error);
  }
};
