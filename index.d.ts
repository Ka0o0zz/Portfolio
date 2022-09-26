type Ttoggle = {
  emojiTrue: string;
  emojiFalse: string;
  section: string;
  state: boolean;
  updateState: () => void;
};

type TAppContextProps = {
  children: ReactNode;
};

type TAppConextType = {
  light: boolean | any;
  spanish: boolean;
  children?: ReactNode;
  changeTema: () => void;
  changeLanguage: () => void;
  initialTema: (state: boolean | any) => void;
  initialLanguage: (state: boolean | any) => void;
};

type TLanguage = {
  nav: {
    linksNavBar: [string];
    menuNavBar: {
      sections: {
        label: string;
        content: [string];
      };
      languages: {
        label: string;
        content: [string];
      };
      settings: {
        label: string;
      };
      socialMedia: {
        label: string;
      };
    };
  };
};

type TNav = {
  nav: {
    linksNavBar: [string];
    menuNavBar: {
      sections: {
        label: string;
        content: [string];
      };
      languages: {
        label: string;
        content: [string];
      };
      settings: {
        label: string;
      };
      socialMedia: {
        label: string;
      };
    };
  };
};

type TMenuNavBar = {
  sections: {
    label: string;
    content: [string];
  };
  languages: {
    label: string;
    content: [string];
  };
  settings: {
    label: string;
  };
  socialMedia: {
    label: string;
  };
};
