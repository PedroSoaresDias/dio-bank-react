import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Conta from "./pages/Conta"
import { useContext } from "react"
import { AppContext } from "./contexts/AppContext"

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path='/' element={ !isLoggedIn ? <Home /> : <Conta /> } />
      <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home /> } />
    </Routes>
  )
}

export default MainRoutes