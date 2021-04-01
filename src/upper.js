export const toUpperCase = (arr) => {
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};
