export type TCompareSetValue = string;
export type TFileComposerSetValue = string  ;
export type TFileComposerSet<T = TFileComposerSetValue> = Set<T>;
export type TFileComposer<T = TFileComposerSet> = Map<string, T>;
export type TFileComposerEntry = [string, TFileComposerSet];

export type TExportsMap = Map<string, Set<string>>;
export type TImportsMap = Map<string, Set<string[]>>;

export type TResolveExportsConfig = {
  initDir?: string;
  excludeIndexingDirs?: string[];
};

export type TAddToSetterConfig = {
  setter: Set<string>;
  list: string[];
  source: string;
};

export type TFileComposerConfig = {
  exportsMap: TExportsMap;
  addToSetter(config: TAddToSetterConfig): void;
};

export type TExistingFilesCheckConfig = {
  fileComposer: TFileComposer;
  done: () => void;
};

export type TCompare = [curr: string, next: string];

export type TConfig = TResolveExportsConfig & {
  excludeIndexingDirsWithFiles?: string[];
  exportRx: RegExp;
  exportExtGlob?: string;
  transformMatch?: (match: string | RegExpMatchArray) => string;
  maxDepth?: number;
};
