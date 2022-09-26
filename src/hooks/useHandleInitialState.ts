/* eslint-disable react-hooks/exhaustive-deps */
import { useAppContext } from "@context/appContext";
import { toBoolean } from "helpers/toBoolean";
import { useEffect } from "react";

export const useHandleInitialState = () => {
  const { initialTema, initialLanguage } = useAppContext();

  useEffect(() => {
    const localStorageTema = toBoolean(localStorage.getItem("light"));
    const localStorageLanguage = toBoolean(localStorage.getItem("spanish"));

    initialTema(localStorageTema);
    initialLanguage(localStorageLanguage);
  }, []);
};
