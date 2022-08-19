import { render } from "@testing-library/react";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext.tsx";
import mockDataContent from "../../../public/mockData/content.json";
import mockDataTips from "../../../public/mockData/tips.json";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Home from "./Home";

test("Home displays correctly", () => {
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
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: jest.fn() }}
          >
            {children}
          </LanguageContext.Provider>
        </DataContext.Provider>
      </Router>
    );
  };

  // getBy methods are synchronous, findBy are asynchronous
  const { container } = render(<Home />, {
    wrapper: wrappers,
  });

  expect(container.querySelector(".home")).toBeTruthy();
});
