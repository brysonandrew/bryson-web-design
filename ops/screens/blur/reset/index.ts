import { deleteBlurs } from './deleteBlurs';
import { removeSourceSuffix } from './removeSourceSuffix';

(async () => {
  try {
    deleteBlurs();
    removeSourceSuffix();
  } catch (error) {
    console.error(error);
  }
})();
