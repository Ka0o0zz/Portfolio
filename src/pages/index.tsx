import { useAppContext } from "@context/temaContext";
import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import { Header } from "sections/Header";

const Home: NextPage = () => {
  const { light, spanish } = useAppContext()

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
