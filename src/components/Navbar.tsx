import { useHandleWidth } from "hooks/useHandleWidth";
import Image from "next/image";
import { NavbarMenu } from "./NavBarMenu";
import { Toggle } from "./Toggle";

export const Navbar = () => {

  const width = useHandleWidth()

  const handleLogoSize = () =>{

    if(width < 900){
      return{
        width: 104,
        height: 50
      }
    }

    return{
      width: 148,
      height: 76
    }
  }

  const widthImage = handleLogoSize()

  return (
    <nav>
      
      <div>
        <Image
          src='/logo-desktop.png'
          alt="logo david morales"
          width={widthImage.width}
          height={widthImage.height}
        />
      </div>

      <ul className="link__navbar">
        {["home", "about", "works", "skills", "contact"].map(
          (item: string, index: number) => (
            <li key={`link-${item}-${index}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
      </ul>

      <div className="toggle__navbar">
        <div>
          <Toggle emojiTrue="☀️" emojiFalse="🌙" section="nav"/>
          <Toggle emojiTrue="es" emojiFalse="us" section="nav"/>
        </div>
      </div>

      <div className='app__navbar-menu'>
        <NavbarMenu/>
      </div> 

    </nav>
  );
};
