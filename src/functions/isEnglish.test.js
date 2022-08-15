import isEnglish from "./isEnglish";

describe("isEnglish function works", () => {
  test("en should return true", () => {
    expect(isEnglish("en")).toBe(true);
  });

  test("EN should return true, arg is not case sensitive", () => {
    expect(isEnglish("EN")).toBe(true);
  });

  test("fa should return false", () => {
    expect(isEnglish("fa")).toBe(false);
  });

  test("random string should return false", () => {
    expect(isEnglish("djkhsdjdhkjd")).toBe(false);
  });
});
