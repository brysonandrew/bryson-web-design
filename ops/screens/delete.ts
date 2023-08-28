import fg from 'fast-glob';
import fs from 'fs';
import { unlink } from 'fs/promises';
import { ALL_EXCLUDE_ORIGINAL_GLOBS } from '../config';

const deleteEntries = (entries) => {
  entries.forEach((entry) => {
    if (fs.existsSync(entry)) {
      unlink(entry);
      console.log(entry, 'DELETED');
    } else {
      console.log('NOT FOUND');
    }
  });
};

const deleteDirs = (entries) => {
  entries.forEach((entry) => {
    if (fs.existsSync(entry)) {
      // const fileEntries = fs.readdirSync(entry);
      // console.log(fileEntries);
      // deleteEntries(fileEntries);
      // fs.rmdir(entry, console.log);
      fs.rmSync(entry, {
        recursive: true,
        force: true,
      });
      console.log(entry, 'DELETED');
    } else {
      console.log('NOT FOUND');
    }
  });
};

(async () => {
  try {
    const entries = await fg(ALL_EXCLUDE_ORIGINAL_GLOBS);
    console.log(entries);
    deleteEntries(entries);
    // const entries = await fg(EMPTY_DIRS, {
    //   onlyDirectories: true,
    // });
    //  console.log(entries);
    // deleteDirs(entries);
  } catch (error) {
    console.log(error);
  }
})();
