import React, { useContext } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { changeLocalStorage, changeLoginLocalStorage } from '../services/storage'
import { LoginContext } from '../contexts/LoginContext'

export default React.memo(function Header() {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const { setEmail, setPassword } = useContext(LoginContext);

  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    changeLoginLocalStorage({ email: "", password: "" });
    setIsLoggedIn(false)
    setEmail("");
    setPassword("");
    navigate("/")
  }

  return (
    <header>
      <Flex justifyContent={"space-between"} backgroundColor={"#FFF"} padding={5} width={"100%"} color={"#000"}>
        <Text fontSize={20} fontWeight={600} fontFamily={"monospace"}>DIO Bank</Text>
        <nav>
          <Flex justifyContent={"center"} gapX={8} paddingRight={8}>
            {
              isLoggedIn && (
                <>
                  <Button
                    colorPalette={"teal"}
                    onClick={logout}
                  >
                    Sair
                  </Button>

                </>
              )
            }
          </Flex>
        </nav>
      </Flex>
    </header >
  )
})