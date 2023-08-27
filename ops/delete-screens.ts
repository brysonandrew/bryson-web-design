import fg from 'fast-glob';
import fs from 'fs';
import { unlink } from 'fs/promises';

(async () => {
  try {
    const entries = await fg([
      'assets/screens/**/*-sm.(png|webp)',
      'assets/screens/**/*.(webp)',
    ]);

    entries.forEach((entry) => {
      if (fs.existsSync(entry)) {
        unlink(entry);
        console.log(entry, 'DELETED');
      } else {
        console.log('NOT FOUND');
      }
    });
  } catch (error) {
    error.log(error);
  }
})();
