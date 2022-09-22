import { motion, useCycle } from "framer-motion";
import { useRef, useState } from "react";
import { Toggle } from "./Toggle";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle}>
    <svg width="29" height="40" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export const NavbarMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [animateCard, setAnimateCard] = useState<object | any>({ x: [300, 0] });

  const handleCloseAnimateMenu = () => {
    if (isOpen) {
      setAnimateCard({ x: [0, 1000],});

      setTimeout(() => {
        toggleOpen();
      }, 500);
      return;
    }
    setAnimateCard({ x: [300, 0] });
    setTimeout(() => {
      toggleOpen();
    }, 100);
  };
  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="button__resposive_nav"
      >
        <MenuToggle toggle={() => handleCloseAnimateMenu()} />
      </motion.div>

      {isOpen && (
        <motion.div
          whileInView={animateCard}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="app__navbar-list-menu"
        >
          <h3>Sections</h3>
          <ul>
            {["home", "about", "contact", "works", "skills"].map(
              (item: string, index: number) => (
                <li key={`link-menu-${item}-${index}`}>
                  <div />
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>

          <h3>Languages</h3>
          <ul>
            <li>
              English
            </li>
            <li>
              Espanish
            </li>
          </ul>

          <h3>Settings</h3>
          <Toggle emojiTrue="☀️" emojiFalse="🌙" section="menu"/>

          <h3>Social Media</h3>
          <ul>
            <li>
              <BsGithub /> Github
            </li>
            <li>
              <BsLinkedin /> Linkedin
            </li>
          </ul>

        </motion.div>
      )}
    </>
  );
};
