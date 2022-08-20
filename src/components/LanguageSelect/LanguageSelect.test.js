import { render, fireEvent } from "@testing-library/react";
import LanguageSelect from "./LanguageSelect";
import { LanguageContext } from "../../context/LanguageContext";

// mock react-select, change custom select to standard select for easier testing
jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value
    );
    onChange(option);
  }

  return (
    <select data-testid="select" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

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
  expect(options[1].selected).toBeTruthy();
});
