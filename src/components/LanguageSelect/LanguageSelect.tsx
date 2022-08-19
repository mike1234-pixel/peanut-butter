import React, { FC, useContext } from "react";
import { Form } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageSelect.scss";

const LanguageSelect: FC = () => {
  const { setLanguage } = useContext(LanguageContext);

  const handleSelect: (lang: string) => void = (lang) => {
    setLanguage(lang);
  };

  return (
    <Form.Select
      aria-label="Select Language"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleSelect(e.target.value)
      }
      className="language-select"
    >
      <option value="select-language" disabled defaultValue="selected">
        Select Language
      </option>
      <option value="en">English</option>
      <option value="fa">Persian</option>
    </Form.Select>
  );
};

export default LanguageSelect;
