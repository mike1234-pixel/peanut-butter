import { useState, useEffect } from "react";

const useFindPage = (pages, pageTitle) => {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    if (!pages) return;

    const page = pages.filter((page) => {
      return page.title === pageTitle.toLowerCase();
    })[0];

    setSelectedPage(page);
  }, [pages, pageTitle]);

  return selectedPage;
};

export default useFindPage;
