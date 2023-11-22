import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Contacts from "./pages/Contact/Contact.jsx";
import HomePage from './pages/Home/Home.jsx';
import NotFoundPage from './components/404/Notfound.jsx';
import Carousel from './components/Carousel/Carousel.jsx';

function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage/>} /> 
         <Route path="/carousel" element={<Carousel/>} /> 
         <Route path="/contact" element={<Contacts/>} /> 
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
