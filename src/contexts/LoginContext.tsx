import { getLoginLocalStorage } from "../services/storage";
import { createContext, useEffect, useState } from "react";

interface ILoginContext {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const LoginContext = createContext({} as ILoginContext);

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const storage = getLoginLocalStorage();

  useEffect(() => {
    if (storage) {
      const { email, password } = JSON.parse(storage);
      setEmail(email)
      setPassword(password)
    }
  }, [storage])

  return (
    <LoginContext.Provider value={{email, password, setEmail, setPassword}}>
      {children}
    </LoginContext.Provider>
  )

}