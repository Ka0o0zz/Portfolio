import { useAppContext } from "@context/appContext";
import { toBoolean } from "helpers/toBoolean";
import { useEffect } from "react";

export const useHandleInitialState = () => {
  const { initialTema } = useAppContext();

  useEffect(() => {
    const localStorageTema = toBoolean(localStorage.getItem("light"));
    initialTema(localStorageTema);
  }, [initialTema]);
};
