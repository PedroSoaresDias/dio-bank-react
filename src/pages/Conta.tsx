import React, { useState, useEffect, useContext } from 'react';
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import CardInfo from '../components/CardInfo';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

function Conta() {
  const [userData, setUserData] = useState<null | UserData>(null);

  const { isLoggedIn } = useContext(AppContext);

  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate('/');

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }

    getData();
  }, [])

  const actualDate = new Date().toLocaleDateString("pt-BR");

  if (userData && id !== userData?.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid gap={8} columns={2} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={"xl"} color={"white"} />
          </Center>
        ) : (
          <>
            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`Último acesso: ${actualDate}`} />
            <CardInfo mainContent={`Informações básicas`} content={`Email: ${userData?.email}`} />
            <CardInfo mainContent={"Saldo"} content={`R$ ${userData?.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  )
}

export default React.memo(Conta);