import { useState, useEffect } from "react";

const useFindPage = <T>(
  pages: Array<T & { title?: string }>,
  pageTitle: string
): T | null => {
  const [selectedPage, setSelectedPage] = useState<T | null>(null);

  useEffect(() => {
    if (!pages) return;

    const page: T = pages.filter((page) => {
      return page.title === pageTitle.toLowerCase();
    })[0];

    setSelectedPage(page);
  }, [pages, pageTitle]);

  return selectedPage;
};

export default useFindPage;

// hook uses generic types to make it flexible
// when calling pass the type like useFindPage<TipI>(...)
