import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LanguageSelect from "./LanguageSelect";
import { LanguageContext } from "../../context/LanguageContext.tsx";

test("Language selection works", () => {
  const wrappers = ({ children }) => {
    return (
      <LanguageContext.Provider
        value={{ language: "en", setLanguage: jest.fn() }}
      >
        {children}
      </LanguageContext.Provider>
    );
  };
  const { container } = render(<LanguageSelect />, {
    wrapper: wrappers,
  });
  fireEvent.change(container.querySelector("select"), {
    target: { value: "fa" },
  });
  let options = container.querySelectorAll("option");
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeTruthy();
});
