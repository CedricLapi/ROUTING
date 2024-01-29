import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import ContactType from './components/ContactType'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/">Home</Link>
    <br />
    <Link to="/contact">Contact</Link>
    <br />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/contact/:type" element={<ContactType />}></Route>
      </Routes>
    </>
  )
}

export default App;
