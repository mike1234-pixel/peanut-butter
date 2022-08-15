import { render, screen } from "@testing-library/react";
import { LanguageContext } from "../../context/languageContext";
import HeroVideo from "./HeroVideo";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const history = createMemoryHistory();

test("has the correct english language text", () => {
  const wrappers = ({ children }) => {
    return (
      <Router location={history.location} navigator={history}>
        <LanguageContext.Provider
          value={{ language: "en", setLanguage: jest.fn() }}
        >
          {children}
        </LanguageContext.Provider>
      </Router>
    );
  };
  const { getByText } = render(<HeroVideo />, {
    wrapper: wrappers,
  });

  const titleText = getByText("Start Learning");

  expect(titleText).toBeTruthy();
});

test("has the correct persian language text", () => {
  const wrappers = ({ children }) => {
    return (
      <Router location={history.location} navigator={history}>
        <LanguageContext.Provider
          value={{ language: "fa", setLanguage: jest.fn() }}
        >
          {children}
        </LanguageContext.Provider>
      </Router>
    );
  };
  const { getByText } = render(<HeroVideo />, {
    wrapper: wrappers,
  });

  const titleText = getByText("شروع به یادگیری");

  expect(titleText).toBeTruthy();
});
