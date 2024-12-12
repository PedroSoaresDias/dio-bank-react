import React, { useContext } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import { changeLocalStorage } from '../services/storage'

export default React.memo(function Header() {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  console.log("Retorno do Header", isLoggedIn)

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <header>
      <Flex justifyContent={"space-between"} backgroundColor={"#FFF"} padding={5} width={"100%"} color={"#000"}>
        <Text fontSize={20} fontWeight={600} fontFamily={"monospace"}>DIO Bank</Text>
        <nav>
          <Flex justifyContent={"center"} gapX={8} paddingRight={8}>
            {/* <Link to={"/"}>Home</Link>
            <Link to={"/conta"}>Conta</Link> */}
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