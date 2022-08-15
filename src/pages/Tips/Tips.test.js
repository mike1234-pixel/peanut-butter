import { render, screen } from "@testing-library/react";
import { DataContext } from "../../context/dataContext";
import { LanguageContextProvider } from "../../context/languageContext";
import mockDataContent from "../../../public/mockData/content.json";
import mockDataTips from "../../../public/mockData/tips.json";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Tips from "./Tips";

test("it displays loading message before data is loaded", () => {
  const cardTitle = "loading...";

  const history = createMemoryHistory();

  const wrappers = ({ children }) => {
    return (
      <Router location={history.location} navigator={history}>
        <DataContext.Provider
          value={{
            tips: null,
            saveTips: jest.fn(),
            content: null,
            saveContent: jest.fn(),
          }}
        >
          <LanguageContextProvider
            value={{ language: "en", setLanguage: jest.fn() }}
          >
            {children}
          </LanguageContextProvider>
        </DataContext.Provider>
      </Router>
    );
  };

  // getBy methods are synchronous, findBy are asynchronous
  const { getByText } = render(<Tips />, {
    wrapper: wrappers,
  });

  expect(getByText(cardTitle)).toBeTruthy();
});

test("it displays the data once loaded", () => {
  const cardTitle = "Grooming";

  const history = createMemoryHistory();

  const wrappers = ({ children }) => {
    return (
      <Router location={history.location} navigator={history}>
        <DataContext.Provider
          value={{
            tips: mockDataTips,
            saveTips: jest.fn(),
            content: mockDataContent,
            saveContent: jest.fn(),
          }}
        >
          <LanguageContextProvider>{children}</LanguageContextProvider>
        </DataContext.Provider>
      </Router>
    );
  };

  const { getByText } = render(<Tips />, {
    wrapper: wrappers,
  });

  expect(getByText(cardTitle)).toBeTruthy();
});
