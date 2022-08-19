import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext";
import toTitleCase from "../../functions/toTitleCase";
import useFindPage from "../../hooks/useFindPage";
import { Container } from "react-bootstrap";
import isEnglish from "../../functions/isEnglish";
import { TipI } from "../../types/data/TipI";
import "./Tip.scss";

const Tip: FC = () => {
  const { tip } = useParams() as {
    tip: string;
  };

  const tipTitle: string = tip ? toTitleCase(tip) : "";

  const { tips }: { tips: Array<TipI> } = useContext(DataContext);
  const { language }: { language: string } = useContext(LanguageContext);

  const selectedPage = useFindPage<TipI>(tips, tipTitle);

  const englishLanguage: boolean = isEnglish(language);

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
