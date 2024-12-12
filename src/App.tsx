import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// import Home from './pages/Home';
// import Conta from './pages/Conta';
import { Provider } from './components/ui/provider';
import Layout from './components/Layout';
// import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './contexts/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, createLoginLocalStorage, getLocalStorage, getLoginLocalStorage } from './services/storage';
import { LoginContextProvider } from './contexts/LoginContext';

function App() {

  !getLocalStorage() && createLocalStorage();
  !getLoginLocalStorage() && createLoginLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <LoginContextProvider>
          <Provider>
            <Layout>
              <MainRoutes />
            </Layout>
          </Provider>
        </LoginContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;