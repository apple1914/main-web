import stringify from "fast-json-stable-stringify";

export function encodeOptions(options) {
  console.log("HERE encodeOptions", options);
  const json = stringify(options);
  return encodeURI(json);
}

export function decodeOptions(path) {
  console.log("HERE decodeOptions, path is", path);

  return JSON.parse(decodeURI(path));
}
