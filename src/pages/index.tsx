import { useAppContext } from "@context/appContext";
import { Navbar } from "components/Navbar";
import { useHandleInitialState } from "hooks/useHandleInitialState";
import { Header } from "sections/Header";

const Home = ({ language }: { language: TLanguage }) => {
  const { light } = useAppContext();

  useHandleInitialState();

  return (
    <div className={`color__app ${light ? "light" : ""}`}>
      <Navbar nav={language.nav} />
      <main className="main-app">
        <Header />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: any }) => {
  const language = await import(`../lang/${locale}.json`);

  return {
    props: {
      language: language.default,
    },
  };
};

export default Home;
