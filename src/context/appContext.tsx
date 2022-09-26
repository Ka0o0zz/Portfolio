import { toBoolean } from "helpers/toBoolean";
import { createContext, useContext, useState } from "react";


const appDefaultValues: TAppConextType = {
  light: false,
  spanish: false,
  changeTema: () => {},
  changeLanguage: () => {},
  initialTema: (state: boolean|any) => {}
};

export const appContext = createContext<TAppConextType>(appDefaultValues);

export const AppProvider = ({ children }: TAppContextProps) => {

  const [light, setLight] = useState<boolean>(appDefaultValues.light)
  const [spanish, setSpanish] = useState<boolean>(appDefaultValues.spanish)

  const changeTema = () => {
    localStorage.setItem('light', `${!light}`)
    setLight(!light)
  }

  const initialTema = (state:boolean) => setLight(state)


  const changeLanguage = () => setSpanish(!spanish)

  const value = {
    light,
    spanish,
    changeTema,
    changeLanguage,
    initialTema
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext)

