import { createContext, useContext, useState } from "react";

const appDefaultValues: TAppConextType = {
  light: false,
  spanish: false,
  changeTema: () => {},
  changeLanguage: () => {}
};

export const appContext = createContext<TAppConextType>(appDefaultValues);

export const AppProvider = ({ children }: TAppContextProps) => {

  const [light, setLight] = useState<boolean>(appDefaultValues.light)
  const [spanish, setSpanish] = useState<boolean>(appDefaultValues.spanish)

  const changeTema = () => setLight(!light)

  const changeLanguage = () => setSpanish(!spanish)

  const value = {
    light,
    spanish,
    changeTema,
    changeLanguage
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext)

