import { render, screen } from "@testing-library/react";
import ImageSection from "./ImageSection";
import retriever4 from "../../assets/image/retriever4.jpg";

test("text passed as prop displays", () => {
  const title = "At the beginning...";
  const text =
    "they were supposed to be hunting dogs to retrieve birds in water as they are excellent swimmers and bring them back to their owners but later on were introduced as companions too because of their high friendliness, playfulness and affection level.";

  const { getByText } = render(
    <ImageSection
      imgPosition="left"
      image={retriever4}
      title={title}
      text={text}
    />
  );

  const titleText = getByText(title);
  const bodyText = getByText(text);

  expect(titleText).toBeTruthy();
  expect(bodyText).toBeTruthy();
});
