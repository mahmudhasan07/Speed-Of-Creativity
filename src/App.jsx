
import { Outlet } from 'react-router-dom'
import './App.css'
import('preline')
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <section>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </section>
  )
}

export default App
