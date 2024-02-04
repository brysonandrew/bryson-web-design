import { faint } from "@ops/console";
import { CACHE_BASE_NAME } from "../constants";

export const FROM_TO_DELIMITER = " ---> ";
export const REPLACE = " -> ";
export const DELIMITER = ", ";
export const INDEX_BASENAME = "index.ts";
export const OP_INDEXER_NAME = "indexing";
export const CACHE_INDEXER_NAME = `${CACHE_BASE_NAME}/${OP_INDEXER_NAME}`;
export const OP_IMPORT_SHORTEN_NAME = "shorten-name";
export const CACHE_IMPORT_SHORTEN_NAME = `${CACHE_BASE_NAME}/${OP_IMPORT_SHORTEN_NAME}`;
export const REPLACE_NEW_LINES = `\n ${faint(REPLACE)} \n`;
