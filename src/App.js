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

    // required for fetching local json
    const fetchHeader = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    (async () => {
      const tipsResponse = await fetch(tipsRequest, fetchHeader).then(
        (response) => response.json()
      );
      const contentResponse = await fetch(contentRequest, fetchHeader).then(
        (response) => response.json()
      );

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

// test loading displays first, then the data

// export default App;

// to learn

// react dev tools
// add useful vs code extensions - youtube
// docs...
// react
// typescript
// cypress
// jest
// eslint
// ci/cd workflow - github
// istanbul (code coverage)
// git - pushing, pull requests, merging etc - create another github account and try this yourself

// Languages: JavaScript, HTML, CSS

// Frameworks: React, Typescript, Sass, OpenAPI

// Tools: Git, Bash, CI/CD (GitHub Actions, Gitlab CI, CircleCI, Travis, ...), A tool such as PhotoShop/GIMP, Illustrator/Inkscape for image treatment/manipulation

// version: 1
// frontend:
//   phases:
//     preBuild:
//       commands:
//         - npm ci
//     build:
//       commands:
//         - npm run build
//   artifacts:
//     baseDirectory: build
//     files:
//       - '**/*'
//   cache:
//     paths:
//       - node_modules/**/*
