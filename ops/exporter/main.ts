import { find } from "./find";
import { init } from "./init";
import { clean } from "./clean";
import { cache } from "./cache";
import { foundation } from "./foundation";
import { build } from "./build";

(async () => {
  try {
    const workspace = init();
    const targets = find(workspace);
    clean(targets);
    cache(targets);
    // const inputs = foundation(targets, workspace);
    // if (inputs) {
    //   await build(inputs);
    // }
  } catch (error) {
    console.log("Exporter - something went wrong: ", error);
  }
})();
