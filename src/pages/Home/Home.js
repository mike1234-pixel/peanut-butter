import { useContext } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import CarouselSection from "../../components/CarouselSection/CarouselSection";
import ImageSection from "../../components/ImageSection/ImageSection";
import { DataContext } from "../../context/dataContext";
import { LanguageContext } from "../../context/languageContext";
import { isEnglish } from "../../functions/isEnglish";
import retriever4 from "../../assets/image/retriever4.jpg";
import retriever5 from "../../assets/image/retriever5.jpg";

const Home = () => {
  const { content } = useContext(DataContext);
  const { language } = useContext(LanguageContext);

  const englishLanguage = isEnglish(language);

  const homePageContent = content ? content[0].homepage : null;

  const title1 = content ? homePageContent.title1 : null;
  const title1fa = content ? homePageContent.title1fa : null;
  const title2 = content ? homePageContent.title2 : null;
  const title2fa = content ? homePageContent.title2fa : null;
  const title3 = content ? homePageContent.title3 : null;
  const title3fa = content ? homePageContent.title3fa : null;
  const text1 = content ? homePageContent.text1 : null;
  const text1fa = content ? homePageContent.text1fa : null;
  const text2 = content ? homePageContent.text2 : null;
  const text2fa = content ? homePageContent.text2fa : null;
  const text3 = content ? homePageContent.text3 : null;
  const text3fa = content ? homePageContent.text3fa : null;

  return (
    <main className={englishLanguage ? "home" : "home persian-text"}>
      <HeroVideo />
      <CarouselSection
        title={englishLanguage ? title1 : title1fa}
        text={englishLanguage ? text1 : text1fa}
      />
      <ImageSection
        imgPosition="left"
        image={retriever4}
        title={englishLanguage ? title2 : title2fa}
        text={englishLanguage ? text2 : text2fa}
      />
      <ImageSection
        imgPosition="right"
        image={retriever5}
        title={englishLanguage ? title3 : title3fa}
        text={englishLanguage ? text3 : text3fa}
      />
    </main>
  );
};

export default Home;
