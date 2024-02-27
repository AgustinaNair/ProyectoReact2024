import NavBar from './Components/Navbar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import { CartProvider } from './context/cartContext'
import Checkout from './Components/Checkout/checkout'

function App() {

  return (
      <div>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>  
              <Route path="/category/:id" element={<ItemListContainer/>}/> 
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
  )
}

export default App
