import truncateString from "./truncateString";

describe("truncateString function works", () => {
  const testString =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio sint iure sequi earum, ipsum qui, ex magnam, corrupti aut unde. Nemo alias sit accusantium enim neque, eligendi eius quasi?";

  test("string should be truncated to 10 words by default, if no second arg", () => {
    expect(truncateString(testString)).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio..."
    );
  });

  test("string should be truncated to 15 words if 15 passed as second arg", () => {
    expect(truncateString(testString, 15)).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio sint iure sequi earum, ipsum..."
    );
  });

  test("whole string should display if second arg is greater than string length, with no ellipsis", () => {
    expect(truncateString(testString, 1000)).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio sint iure sequi earum, ipsum qui, ex magnam, corrupti aut unde. Nemo alias sit accusantium enim neque, eligendi eius quasi?"
    );
  });
});
