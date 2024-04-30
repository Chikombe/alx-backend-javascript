export default function cleanSet(set, startString) {
  const values = [...set];
  const filteredValues = values.filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.substring(startString.length)).join('-');
}
