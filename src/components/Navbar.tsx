import { useAppContext } from "@context/appContext";
import { useHandleWidth } from "hooks/useHandleWidth";
import Image from "next/image";
import { NavbarMenu } from "./NavBarMenu";
import { Toggle } from "./Toggle";

const mapLinksBar = (linksNavBar: [string]) =>
  linksNavBar.map((item: string, index: number) => (
    <li key={`link-${item}-${index}`}>
      <a href={`#${item}`}>{item}</a>
      <div />
    </li>
  ));

export const Navbar = ({ nav: { linksNavBar, menuNavBar } }: TNav) => {
  const width = useHandleWidth();
  const { light, spanish, changeTema, changeLanguage } = useAppContext();

  const handleLogoSize = () => {
    if (width < 900) {
      return {
        width: 124,
        height: 60,
      };
    }

    return {
      width: 148,
      height: 76,
    };
  };

  const widthImage = handleLogoSize();

  return (
    <nav className={light ? "light" : ""}>
      <div>
        <Image
          src={light ? "/logo-desktop-light.png" : "/logo-desktop.png"}
          alt="logo david morales"
          width={widthImage.width}
          height={widthImage.height}
        />
      </div>

      <ul className="link__navbar">{mapLinksBar(linksNavBar)}</ul>

      <div className="toggle__navbar">
        <div>
          <Toggle
            emojiTrue="☀️"
            emojiFalse="🌙"
            section="nav"
            state={light}
            updateState={changeTema}
          />
          <Toggle
            emojiTrue="es"
            emojiFalse="us"
            section="nav"
            state={spanish}
            updateState={changeLanguage}
          />
        </div>
      </div>

      <div className="app__navbar-menu">
        <NavbarMenu menuNavBar={menuNavBar} />
      </div>
    </nav>
  );
};
