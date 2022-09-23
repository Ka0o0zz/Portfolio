/* eslint-disable react/no-unescaped-entities */

import { VisualCode } from "components/VisualCode";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Header = () => {
  return (
    <section className="Header">
      <div className="app__flex intro-my-self">
        <h1>Hey I Am David 👋</h1>
        <h2 className="font-degrade-color">Fullstack Developer</h2>
        <p>and then I'm going to show you a little about my career</p>

        <div>
          <BsGithub />
          <BsLinkedin />
        </div>

        <div className="mouse">
          <Image
            src="/mouse.png"
            alt=""
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="app__flex visual-code">
        <VisualCode />
        {/*<div className="ticket">{"// scroll down"}</div>*/}
        <button>explore</button>
      </div>
    </section>
  );
};
