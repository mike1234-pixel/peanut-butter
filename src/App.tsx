import { FC, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import Home from "./pages/Home/Home";
import Page from "./pages/Tip/Tip";
import Pages from "./pages/Tips/Tips";
import Error404 from "./pages/Error404/Error404";
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { TipI } from "./types/data/TipI";
import { ContentI } from "./types/data/ContentI";
import { SaveTips, SaveContent } from "./types/state/setters";
import "./App.scss";

const App: FC = () => {
  const {
    saveTips,
    saveContent,
  }: { saveTips: SaveTips; saveContent: SaveContent } = useContext(DataContext);

  useEffect(() => {
    const tipsRequest: string = "/mockData/tips.json";
    const contentRequest: string = "/mockData/content.json";

    interface FetchHeaderI {
      method: string;
      headers: {
        "Content-Type": string;
        Accept: string;
      };
    }

    // required for fetching local json
    const fetchHeader: FetchHeaderI = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    (async () => {
      const tipsResponse: Array<TipI> = await fetch(
        tipsRequest,
        fetchHeader
      ).then((response: Response) => response.json());
      const contentResponse: Array<ContentI> = await fetch(
        contentRequest,
        fetchHeader
      ).then((response: Response) => response.json());

      saveTips(tipsResponse);
      saveContent(contentResponse);
    })();
  }, [saveTips, saveContent]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Pages />} />
        <Route path="/tips/:tip" element={<Page />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
