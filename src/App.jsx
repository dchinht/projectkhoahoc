import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Contacts from "./pages/Contact/Contact.jsx";
import HomePage from './pages/Home/Home.jsx';

function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage/>} /> 
         <Route path="/contact" element={<Contacts/>} /> 
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
