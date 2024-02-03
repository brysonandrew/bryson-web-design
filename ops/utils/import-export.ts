export const IMPORT_LINE_VALUE_RX = /import (?!type)([{},\s\w])+.*(\n)?/g;
export const IMPORT_LINE_TYPE_RX = /import type ([{},\s\w])+.*(\n)?/g;
export const EXTRACT_IMPORT_NAMED_RX = /{(\s*\w+\s*,{0,1}\s*)+\}/g; // eg "{foo,bar}", "{named, exports, from, module}"
export const EXTRACT_DEP_RX = /(?<=")(?:\\.|[^"\\.])*(?=")/g; // eg: "react", "styled-components", "@apollo/client"
export const EXTRACT_EXPORT_AND_PREFIX =
  /(?<=([^`]export ))((enum \w+(?= {))|(default \w+(?= ))|(class \w+(?= extends ))|((type|const) \w+)(?=( =)|(: )))/g; // eg "type TPath", "const path", "enum EPath"
export const FULL_IMPORT_PATH_RX = /(?<=import [^"]+from ")(?:\\|[^"\\])*(?=";)/g;
export const SHORT_IMPORT_PATH_RX = /((\.{1,2}\/)+\w+)/g;
export const ALL_BETWEEN_QUOTES_RX = /(["'])(?:(?=(\\?))\2.)*?\1;/g;
export const IMPORT_START_RX = /import {/g;
export const EXTRACT_EXPORT_GRAPHQL =
  /(?<=(query|mutation|fragment) )(?:\\.|\w)*(?=([$(){}:\w\s!,]*\n))/g;

export const LIB_IMPORT_SOURCE_RX = /(?<=from ")(\.\.\/){2,}lib.*(?=";)/g;
