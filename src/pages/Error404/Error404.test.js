import { render } from "@testing-library/react";
import Error404 from "./Error404";

test("Error404 contains correct text", () => {
  const { getByText } = render(<Error404 />);

  const notFoundText = getByText("404 not found");

  expect(notFoundText).toBeTruthy();
});
