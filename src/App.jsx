import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <Nav></Nav>
      </div>
      <div className='flex-grow'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
