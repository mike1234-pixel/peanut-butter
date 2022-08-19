import Index from "./index.tsx";

it("renders without crashing", () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: "censored" })
    )
  ).toMatchSnapshot();
});
