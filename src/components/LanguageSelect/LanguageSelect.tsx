import { FC, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  Options,
  StylesConfig,
} from "react-select";
import "./LanguageSelect.scss";

const LanguageSelect: FC = () => {
  const { setLanguage } = useContext(LanguageContext);

  type OptionType = { label: string; value: string };

  const handleChange: (option: OptionType | null) => void = (option) => {
    if (option) {
      const language: string = option.value;
      setLanguage(language);
    }
  };

  // extend/customise the existing styles
  const customStyles: StylesConfig<any> = {
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<any, boolean, GroupBase<any>>
    ) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      background: state.isSelected ? "rgb(207, 168, 116)" : "white",
    }),
    menuList: (provided: CSSObjectWithLabel) => ({
      ...provided,
      padding: "0",
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: "black",
    }),
    control: () => ({
      width: 250,
      background: "white",
      display: "flex",
      padding: "0",
    }),
  };

  const options: Options<any> = [
    { value: "en", label: "English" },
    { value: "fa", label: "Persian" },
  ];

  return (
    <Select
      options={options}
      onChange={(option) => handleChange(option)}
      styles={customStyles}
      placeholder={"Select Language"}
      className="language-select"
    />
  );
};

export default LanguageSelect;
