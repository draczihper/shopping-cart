import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import NavBar from './NavBar';
import Home from "./Home"
import Shop from "./Shop"
import Cart from "./Cart"


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes> 
          <Route path='/Home' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
