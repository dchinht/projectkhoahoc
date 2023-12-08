import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Contacts from "./pages/Contact/Contact.jsx";
import HomePage from './pages/Home/Home.jsx';
import NotFoundPage from './components/404/Notfound.jsx';
import Loader from './components/Loader/Loader.jsx';
import CourseItem from './components/CourseList/CouseItem.jsx';
import Education from './pages/Education/Education.jsx';
import GeneralEducation from './pages/Education/GEC.jsx';
import English from './pages/Education/EC.jsx';
import Programming from './pages/Education/PC.jsx';
import CourseDetail from './components/CourseList/CourseDetail.jsx';
import Cart from './pages/Cart/Cart.jsx';
import CheckOut from './pages/checkOut/CheckOut.jsx';
import OrderHistory from './pages/History/OrderHistory.jsx';
import Admin from './pages/admin/Dashbroad/Admin/Admin.jsx';
import UserManager from './pages/admin/UserManager/UserManager.jsx';

function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage/>} />    
         <Route path="/admin" element={<Admin/>} />
         <Route path="/user-manager" element={<UserManager/>} />
         <Route path="/course-list" element={<CourseItem/>} /> 
         <Route path="/contact" element={<Contacts/>} /> 
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="*" element={<NotFoundPage/>} />
         <Route path="/loader" element={<Loader/>} />
         <Route path="/cart" element={<Cart/>} /> 
         <Route path="/history" element={<OrderHistory/>} /> 
         <Route path="/checkout" element={<CheckOut/>} /> 
         <Route path="/education" element={<Education/>}>
             <Route path="general-education" element={<GeneralEducation/>} />
             <Route path="english" element={<English/>} />
             <Route path="programming" element={<Programming/>} />
             <Route path=":id" element={<CourseDetail/>} />
         </Route>
      </Routes>
    </>
  )
}

export default App
