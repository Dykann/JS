export const toUpper = (arr) => {
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};
