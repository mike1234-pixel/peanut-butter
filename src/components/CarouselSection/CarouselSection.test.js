import { render } from "@testing-library/react";
import CarouselSection from "./CarouselSection";

const title = "In the 19thh century...";
const text =
  "Golden Retrievers were bred by a Scottish businessman, Sir Dudley Marjoribanks, from black Coated Retrievers crossed with Tweed Spaniels and several other breeds.";
const carouselImageAltText = "golden retriever";

test("Carousel displays title and text from props", () => {
  const { getByText } = render(<CarouselSection title={title} text={text} />);

  const renderedTitle = getByText(title);
  const renderedText = getByText(text);

  expect(renderedTitle).toBeTruthy();
  expect(renderedText).toBeTruthy();
});

test("Carousel contains three images", () => {
  const { getAllByAltText } = render(
    <CarouselSection title={title} text={text} />
  );

  const carouselImages = getAllByAltText(carouselImageAltText);

  expect(carouselImages).toHaveLength(3);
});
