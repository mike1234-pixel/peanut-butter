import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { LanguageContext } from "../../context/languageContext";
import Nav from "./Nav";

const history = createMemoryHistory();

test("Nav displays correctly", () => {
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
  const { container } = render(<Nav />, {
    wrapper: wrappers,
  });

  expect(container.querySelector(".navbar-brand")).toBeTruthy();
});
