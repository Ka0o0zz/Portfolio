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
  light: boolean|any;
  spanish: boolean;
  children?: ReactNode;
  changeTema: () => void;
  changeLanguage: () => void;
  initialTema: (state:boolean|any) => void;
};
