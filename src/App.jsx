import NavBar from './Components/Navbar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Cart from './Components/Cart/Cart'

function App() {

  return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>  
            <Route path="/category/:id" element={<ItemListContainer/>}/> 
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
