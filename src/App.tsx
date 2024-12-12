import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// import Home from './pages/Home';
// import Conta from './pages/Conta';
import { Provider } from './components/ui/provider';
import Layout from './components/Layout';
// import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <MainRoutes />
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;