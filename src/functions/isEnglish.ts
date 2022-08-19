const isEnglish: (language: string) => boolean = (language) =>
  language.toLowerCase() === "en" ? true : false;

export default isEnglish;
