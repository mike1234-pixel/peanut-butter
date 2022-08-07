import "./App.scss";
import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { DataContext } from "./context/dataContext";
import Home from "./pages/Home/Home";
import Page from "./pages/Tip/Tip";
import Pages from "./pages/Tips/Tips";
import Error404 from "./pages/Error404/Error404";
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { saveTips, saveContent } = useContext(DataContext);

  useEffect(() => {
    const tipsRequest = "/mockData/tips.json";
    const contentRequest = "/mockData/content.json";

    const fetchHeader = {
      // required for fetching local json
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    Promise.all([
      fetch(tipsRequest, fetchHeader).then((response) => response.json()),
      fetch(contentRequest, fetchHeader).then((response) => response.json()),
    ])
      .then((responses) => {
        saveTips(responses[0]);
        saveContent(responses[1]);
      })
      .catch((err) => console.error(err));
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

// test loading displays first, then the data

// export default App;

// to learn

// react dev tools
// add useful vs code extensions - youtube
// docs...
// react
// typescript
// cypress
// eslint
// ci/cd workflow - github
// istanbul (code coverage)
// git - pushing, pull requests, merging etc - create another github account and try this yourself

// cleanup in useEffect - add the lazy image loading to the app and use it there

// functionality to build...
// click on a dog, and it takes you to a dynamic page for that dog
