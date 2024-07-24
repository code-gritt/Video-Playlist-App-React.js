export const API_KEY = "AIzaSyCGxKkgD18qZQY_Ri1MLof46YL_NQk7O7c";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
