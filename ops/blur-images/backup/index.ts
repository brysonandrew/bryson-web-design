import { createSourceSuffix } from './createSourceSuffix';

(async () => {
  try {
    createSourceSuffix();
  } catch (error) {
    console.error(error);
  }
})();
