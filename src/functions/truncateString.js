const truncateString = (str, limit = 10) => {
  return str.split(" ").slice(0, limit).join(" ") + "...";
};

export default truncateString;
