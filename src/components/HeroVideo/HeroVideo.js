import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeroVideo.scss";

const HeroVideo = () => {
  const { language } = useContext(LanguageContext);

  const englishLanguage = language === "en";

  return (
    <header className="hero-video__container">
      <Container>
        {englishLanguage ? (
          <div className="hero-video__title">
            <h1>
              Learn everything
              <br />
              there is to know
              <br />
              about the golden retriever
            </h1>
            <Link to="/tips" className="button">
              Start Learning
            </Link>
          </div>
        ) : (
          <div className="hero-video__title hero-video__title--persian">
            <h1>همه چیز را در مورد گلدن رتریور بدانید</h1>
            <Link to="/tips" className="button">
              شروع به یادگیری
            </Link>
          </div>
        )}
      </Container>
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://peanut-butter-photos.s3.eu-west-2.amazonaws.com/hero.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-video__overlay"></div>
    </header>
  );
};

export default HeroVideo;
