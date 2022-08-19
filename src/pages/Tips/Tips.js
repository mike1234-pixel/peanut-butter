import { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import urlify from "../../functions/urlify";
import truncateString from "../../functions/truncateString";
import toTitleCase from "../../functions/toTitleCase";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext.tsx";
import isEnglish from "../../functions/isEnglish";
import "./Tips.scss";

const Tips = () => {
  const { tips } = useContext(DataContext);
  const { language } = useContext(LanguageContext);

  const englishLanguage = isEnglish(language);

  return (
    <Container>
      <div className="tips">
        {tips ? (
          tips.map((tip) => {
            const title = englishLanguage ? tip.title : tip.titlefa;
            const description = englishLanguage
              ? tip.description
              : tip.descriptionfa;

            const banner = JSON.parse(tip.banner.toLowerCase());

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
