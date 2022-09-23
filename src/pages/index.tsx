import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import { Header } from "sections/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="main-app">
        <Header />
      </main>
    </div>
  );
};

export default Home;
