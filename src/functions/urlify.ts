const urlify: (str: string) => string = (str) =>
  str.toLowerCase().replace(/ /g, "-");

export default urlify;
