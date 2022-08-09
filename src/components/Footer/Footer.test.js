import { render } from "@testing-library/react";
import Footer from "./Footer";

test("footer contains copy text", () => {
  const { getByText } = render(<Footer />);

  const copyText = getByText("© Faranak Gholampour.");

  expect(copyText).toBeTruthy();
});
