import { FC, createContext, PropsWithChildren, useState } from "react";
import mockDataTips from "../mockData/tips.json";
import mockDataContent from "../mockData/content.json";
import { TipI } from "../types/data/TipI";
import { ContentI } from "../types/data/ContentI";
import { SaveContent, SaveTips } from "../types/state/setters";

// createContext creates a context object
// When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

// define types for tips and content
interface DataContextProps {
  tips: Array<TipI>;
  saveTips: SaveTips;
  content: Array<ContentI>;
  saveContent: SaveContent;
}

export const DataContext = createContext<DataContextProps>({
  tips: mockDataTips,
  saveTips: (mockDataTips) => {},
  content: mockDataContent,
  saveContent: (mockDataContent) => {},
});

export const DataContextProvider: FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  // react component, use it to wrap components you want to pass the data to, which gets passed as props
  const [tips, saveTips] = useState<Array<TipI>>(mockDataTips);
  const [content, saveContent] = useState<Array<ContentI>>(mockDataContent);

  return (
    <DataContext.Provider
      value={{
        tips,
        saveTips,
        content,
        saveContent,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
