import { FC, useContext } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import CarouselSection from "../../components/CarouselSection/CarouselSection";
import ImageSection from "../../components/ImageSection/ImageSection";
import { DataContext } from "../../context/DataContext";
import { LanguageContext } from "../../context/LanguageContext";
import isEnglish from "../../functions/isEnglish";
import { ContentI, HomepageI } from "../../types/data/ContentI";
import retriever4 from "../../assets/image/retriever4.jpg";
import retriever5 from "../../assets/image/retriever5.jpg";

const Home: FC = () => {
  const { content }: { content: Array<ContentI> } = useContext(DataContext);
  const { language }: { language: string } = useContext(LanguageContext);

  const englishLanguage: boolean = isEnglish(language);

  const homePageContent: HomepageI = content && content[0].homepage;

  type StringOrNull = string | null;

  const title1: StringOrNull = content ? homePageContent.title1 : null;
  const title1fa: StringOrNull = content ? homePageContent.title1fa : null;
  const title2: StringOrNull = content ? homePageContent.title2 : null;
  const title2fa: StringOrNull = content ? homePageContent.title2fa : null;
  const title3: StringOrNull = content ? homePageContent.title3 : null;
  const title3fa: StringOrNull = content ? homePageContent.title3fa : null;
  const text1: StringOrNull = content ? homePageContent.text1 : null;
  const text1fa: StringOrNull = content ? homePageContent.text1fa : null;
  const text2: StringOrNull = content ? homePageContent.text2 : null;
  const text2fa: StringOrNull = content ? homePageContent.text2fa : null;
  const text3: StringOrNull = content ? homePageContent.text3 : null;
  const text3fa: StringOrNull = content ? homePageContent.text3fa : null;

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
