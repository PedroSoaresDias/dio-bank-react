import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { Flex, Center, Input } from "@chakra-ui/react";
import ButtonLogin from "../components/ButtonLogin";
import { login } from '../services/login';
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage, changeLoginLocalStorage } from "../services/storage";
import { PasswordInput } from "../components/ui/password-input";
import { LoginContext } from "../contexts/LoginContext";

function Home() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const { setIsLoggedIn } = useContext(AppContext)
  const { setEmail, setPassword } = useContext(LoginContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      alert("Email ou senha inválidos")
      return false
    }

    setIsLoggedIn(true)
    setEmail(userEmail);
    setPassword(senha);
    changeLocalStorage({ login: true });
    changeLoginLocalStorage({ email: email, password: senha });
    navigate(`/conta/1`)
  }

  return (
    <Flex minHeight='100vh' backgroundColor="#9413dc" padding={25} justify={"center"} align={"center"} fontFamily={"monospace"} fontSize={16} fontWeight={600}>
      <Card>
        <Center>
          <h1>Faça o Login</h1>
        </Center>
        <Input type="email" placeholder='E-mail' marginY={1} value={userEmail} onChange={e => setUserEmail(e.target.value)} />
        <PasswordInput type="password" placeholder='Password' marginY={1} value={senha} onChange={e => setSenha(e.target.value)} />
        <Center>
          <ButtonLogin onClick={() => validateUser(userEmail, senha)} placeholder='Entrar' />
        </Center>
      </Card>
    </Flex>
  )
}

export default React.memo(Home);