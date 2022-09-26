import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

const appDefaultValues: TAppConextType = {
  light: false,
  spanish: false,
  changeTema: () => {},
  changeLanguage: () => {},
  initialTema: (state: boolean | any) => {},
  initialLanguage: (state: boolean | any) => {},
};

export const appContext = createContext<TAppConextType>(appDefaultValues);

export const AppProvider = ({ children }: TAppContextProps) => {
  const router = useRouter();

  const [light, setLight] = useState<boolean>(appDefaultValues.light);
  const [spanish, setSpanish] = useState<boolean>(appDefaultValues.spanish);

  const changeTema = () => {
    localStorage.setItem("light", `${!light}`);
    setLight(!light);
  };

  const initialTema = (state: boolean) => setLight(state);

  const changeLanguage = () => {
    localStorage.setItem("spanish", `${!spanish}`);
    setSpanish(!spanish);

    router.push(router.pathname, router.pathname, {
      locale: !spanish ? "es" : "en",
    });
  };

  const initialLanguage = (state: boolean) => {
    setSpanish(state);
  };

  const value = {
    light,
    spanish,
    changeTema,
    changeLanguage,
    initialTema,
    initialLanguage,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);
