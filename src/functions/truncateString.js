const truncateString = (str, limit = 10) => {
  const wordsArr = str.split(" ");
  return limit > wordsArr.length
    ? str
    : wordsArr.slice(0, limit).join(" ") + "...";
};

export default truncateString;
