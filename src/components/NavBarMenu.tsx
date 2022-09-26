import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Toggle } from "./Toggle";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useAppContext } from "@context/appContext";

const Path = (props: any) => {
  const { light } = useAppContext();

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={light ? "#000" : "#fff"}
      strokeLinecap="round"
      {...props}
    />
  );
};

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
const mapLinksMenuBar = (linksNavBar: [string]) =>
  linksNavBar.map((item: string, index: number) => (
    <li key={`link-menu-${item}-${index}`}>
      <div />
      <a href={`#${item}`}>{item}</a>
    </li>
  ));

export const NavbarMenu = ({
  menuNavBar: { sections, languages, settings, socialMedia },
}: {
  menuNavBar: TMenuNavBar;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { light, changeTema } = useAppContext();

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="button__resposive_nav"
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            exit={{ x: [0, 1000] }}
            className={`app__navbar-list-menu ${light ? "light" : ""}`}
          >
            <h3>{sections.label}</h3>
            <ul>{mapLinksMenuBar(sections.content)}</ul>

            <h3>{languages.label}</h3>
            <ul>
              {languages.content.map((language: string) => (
                <li key={`language-${language}`}>{language}</li>
              ))}
            </ul>

            <h3>{settings.label}</h3>
            <Toggle
              emojiTrue="☀️"
              emojiFalse="🌙"
              section="menu"
              state={light}
              updateState={changeTema}
            />

            <h3>{socialMedia.label}</h3>
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
      </AnimatePresence>
    </>
  );
};
