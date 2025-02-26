import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Outlet></Outlet>
    </>
  )
}

export default App
