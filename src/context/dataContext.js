import { createContext, useState } from "react";

// createContext creates a context object
// When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  // react component, use it to wrap components you want to pass the data to, which gets passed as props
  const [tips, saveTips] = useState(null);
  const [content, saveContent] = useState(null);

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
