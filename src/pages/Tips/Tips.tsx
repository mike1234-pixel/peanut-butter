import { FC, useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import urlify from "../../functions/urlify";
import truncateString from "../../functions/truncateString";
import toTitleCase from "../../functions/toTitleCase";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext";
import isEnglish from "../../functions/isEnglish";
import { TipI } from "../../types/data/TipI";
import "./Tips.scss";

const Tips: FC = () => {
  const { tips }: { tips: Array<TipI> } = useContext(DataContext);
  const { language }: { language: string } = useContext(LanguageContext);

  const englishLanguage: boolean = isEnglish(language);

  return (
    <Container>
      <div className="tips">
        {tips ? (
          tips.map((tip) => {
            const title: string = englishLanguage ? tip.title : tip.titlefa;
            const description: string = englishLanguage
              ? tip.description
              : tip.descriptionfa;

            const banner: string = JSON.parse(tip.banner.toLowerCase());

            return !banner ? (
              <Link
                to={"/tips/" + urlify(tip.title)}
                key={tip.id}
                className={englishLanguage ? "tip" : "tip persian-text"}
              >
                <Card className="tip__card">
                  <Card.Img variant="top" src={tip.img} />
                  <Card.Body>
                    <Card.Title>
                      <h5>{toTitleCase(title)}</h5>
                    </Card.Title>
                    <Card.Text>
                      <span>{truncateString(description, 6)}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ) : (
              <Link
                to={"/tips/" + urlify(tip.title)}
                key={tip.id}
                className={
                  englishLanguage ? "tip-banner" : "tip-banner persian-text"
                }
                style={{ backgroundImage: `url(${tip.img})` }}
              >
                <h2>{toTitleCase(title)}</h2>
                <span>{truncateString(description, 6)}</span>
              </Link>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </Container>
  );
};

export default Tips;
