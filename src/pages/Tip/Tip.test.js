import { render } from "@testing-library/react";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext.tsx";
import mockDataContent from "../../../public/mockData/content.json";
import mockDataTips from "../../../public/mockData/tips.json";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Tip from "./Tip";

const history = createMemoryHistory();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    tip: "general-information",
  }),
}));

test("page displays correctly when route is valid", () => {
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

  const { getByText } = render(<Tip />, {
    wrapper: wrappers,
  });

  expect(getByText("General Information")).toBeTruthy();
});
