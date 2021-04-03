export function maskify(cc) {
  const hiddenNumbers = cc.slice(0, -4);
  const maskifiedNumbers = "#".repeat(hiddenNumbers.length);
  const shownNumbers = cc.slice(-4);
  return maskifiedNumbers + shownNumbers;
}
