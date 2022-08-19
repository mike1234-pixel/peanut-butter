import { FC, createContext, PropsWithChildren, useState } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

// create context
export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: (language) => {},
}); // default value

export const LanguageContextProvider: FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
