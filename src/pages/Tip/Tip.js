import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/dataContext";
import { LanguageContext } from "../../context/languageContext";
import toTitleCase from "../../functions/toTitleCase";
import useFindPage from "../../hooks/useFindPage";
import { Container } from "react-bootstrap";
import isEnglish from "../../functions/isEnglish";
import "./Tip.scss";

const Tip = () => {
  const { tip } = useParams();

  const tipTitle = toTitleCase(tip);

  const { tips } = useContext(DataContext);
  const { language } = useContext(LanguageContext);

  const selectedPage = useFindPage(tips, tipTitle);

  const englishLanguage = isEnglish(language);

  return (
    <Container>
      <div className="tip-page">
        {selectedPage ? (
          <div className={englishLanguage ? "english-text" : "persian-text"}>
            <h1>
              {toTitleCase(
                englishLanguage ? selectedPage.title : selectedPage.titlefa
              )}
            </h1>
            <p>
              {englishLanguage
                ? selectedPage.description
                : selectedPage.descriptionfa}
            </p>
            <img src={selectedPage.img} alt={selectedPage.title} />
          </div>
        ) : (
          <p>not found...</p>
        )}
      </div>
    </Container>
  );
};

export default Tip;
