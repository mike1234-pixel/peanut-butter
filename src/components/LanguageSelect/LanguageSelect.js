import { useContext } from "react";
import { Form } from "react-bootstrap";
import { LanguageContext } from "../../context/languageContext";
import "./LanguageSelect.scss";

const LanguageSelect = () => {
  const { setLanguage } = useContext(LanguageContext);

  const handleSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <Form.Select
      aria-label="Select Language"
      onChange={(e) => handleSelect(e.target.value)}
      className="language-select"
    >
      <option>Select Language</option>
      <option value="en">English</option>
      <option value="fa">Persian</option>
    </Form.Select>
  );
};

export default LanguageSelect;
