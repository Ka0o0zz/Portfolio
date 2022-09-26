import { useAppContext } from "@context/appContext";
import { Navbar } from "components/Navbar";
import { useHandleInitialState } from "hooks/useHandleInitialState";
import type { NextPage } from "next";
import { Header } from "sections/Header";

const Home: NextPage = () => {
  const { light, spanish } = useAppContext()

  useHandleInitialState()

  return (
    <div className={`color__app ${light ? 'light' : ''}`}>
      <Navbar />
      <main className="main-app">
        <Header />
      </main>
    </div>
  );
};

export default Home;
