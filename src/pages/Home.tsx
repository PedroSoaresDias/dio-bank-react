import React, { useContext, useState } from "react";
import Card from "../components/Card";
// import { Provider } from "../components/ui/provider"
import { Flex, Center, Input } from "@chakra-ui/react";
import ButtonLogin from "../components/ButtonLogin";
import { login } from '../services/login';
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      alert("Email inválido")
      return false
    }

    setIsLoggedIn(true)
    changeLocalStorage({ login: true });
    navigate(`/conta/1`)
  }

  return (
    <Flex minHeight='100vh' backgroundColor="#9413dc" padding={25} justify={"center"} align={"center"} fontFamily={"monospace"} fontSize={16} fontWeight={600}>
        <Card>
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Input type="email" placeholder='E-mail' marginY={1} value={email} onChange={event => setEmail(event.target.value)} />
          <Input type="password" placeholder='Password' marginY={1} value={senha} onChange={event => setSenha(event.target.value)} />
          <Center>
            <ButtonLogin onClick={() => validateUser(email)} placeholder='Entrar' />
          </Center>
        </Card>
      </Flex>
  )
}