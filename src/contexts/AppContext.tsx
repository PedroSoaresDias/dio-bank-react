import { getLocalStorage } from "../services/storage";
import { createContext, useEffect, useState } from "react";

interface IAppContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const storage = getLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login)
    }
  }, [storage])

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}