import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Footer contains copy text", () => {
  const { getByText } = render(<Footer />);

  const copyText = getByText("© Faranak Gholampour.");

  expect(copyText).toBeTruthy();
});
