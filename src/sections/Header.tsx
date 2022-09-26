/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { VisualCode } from "components/VisualCode";
import { animationLeftToRight, opacity0To100 } from "helpers/listAnimations";
import { useAppContext } from "@context/appContext";

export const Header = () => {
  const { light } = useAppContext();

  return (
    <section className="Header">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={`app__flex intro-my-self ${light ? "light" : ""}`}
      >
        <motion.h1 variants={animationLeftToRight}>Hey I Am David 👋</motion.h1>
        <motion.h2
          variants={animationLeftToRight}
          className="font-degrade-color"
        >
          Fullstack Developer
        </motion.h2>
        <motion.p variants={animationLeftToRight}>
          and then I'm going to show you a little about my career
        </motion.p>

        <motion.div variants={animationLeftToRight}>
          <BsGithub />
          <BsLinkedin />
        </motion.div>

        <motion.div variants={opacity0To100} className="mouse">
          <Image
            src={light ? "/mouse-light.png" : "/mouse.png"}
            alt=""
            width={70}
            height={70}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="app__flex visual-code"
      >
        <VisualCode />
        {/*<div className="ticket">{"// scroll down"}</div>*/}
        <button>explore</button>
      </motion.div>
    </section>
  );
};
