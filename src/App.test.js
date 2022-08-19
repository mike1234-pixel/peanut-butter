import { render } from "@testing-library/react";
import { DataContext } from "./context/DataContext";
import { LanguageContext } from "./context/LanguageContext.tsx";
import mockDataContent from "../public/mockData/content.json";
import mockDataTips from "../public/mockData/tips.json";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const history = createMemoryHistory();

test("renders correctly", () => {
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
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: jest.fn() }}
          >
            {children}
          </LanguageContext.Provider>
        </DataContext.Provider>
      </Router>
    );
  };

  const { container } = render(<App />, {
    wrapper: wrappers,
  });

  expect(container.querySelector(".home")).toBeTruthy();
});
