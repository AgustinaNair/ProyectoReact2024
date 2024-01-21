import NavBar from './Components/Navbar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
      <div>
        <NavBar/>
        <ItemListContainer greeting="HOY 20% OFF!!!"/>
      </div>
  )
}

export default App
