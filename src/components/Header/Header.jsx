/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

function Header({handleClickAbout,handleClickTeacher}) {
  const [isHover,setIsHover] = useState(false);
  const active = "font-medium hover:text-green-900"
  const active1 = "font-semibold text-green-700 border-b-2 border-green-700"
  return (
    <div className="sticky top-0 z-50">
        <header style={{ boxShadow: '5px 5px 5px 5px lightgrey',borderBottom:'2px solid black' }}  className="w-full text-gray-700 bg-white border-t border-gray-900 body-font ">
          <div className="flex flex-col items-center justify-between p-6 mx-auto md:flex-row ">
            <img style={{ width:'60px',height:'60px',marginLeft:'50px' }} src="../src/assets/logo.png" alt="" />
            <nav className="flex flex-wrap items-center justify-center pl-6 text-base border-l gap-9 border-gray-200 mr-[810px]">
              <NavLink to="/" className={({isActive})=>{return isActive ? active1 : active}}>
              Home
              </NavLink>
              <NavLink to="/khoahoc" className={({isActive})=>{return isActive ? active1 : active}}>
                Khoá Học
              </NavLink>
              <Link onClick={handleClickTeacher} className="font-medium hover:text-green-900">
                 Giáo viên
              </Link>
              <NavLink>
              <div className="font-medium hover:text-green-900"
              onMouseOver={()=>setIsHover(true)}
              onMouseOut={()=>setIsHover(false)}
              >
                 <p className="relative">Education</p>
                 <ul className={`${ isHover ? "visible" : "invisible" } w-[250px] bg-white absolute p-2 mt-1 rounded-md border border-gray-600`}>
                    <Link className="hover:text-green-300 ">Chương trình chính quy</Link> <br/>
                    <Link className="hover:text-green-300 ">Chương trình IELTS</Link>  <br/>
                    <Link className="hover:text-green-300 ">Chương trình lập trình</Link>  <br/>
                    <Link className="hover:text-green-300 ">Chương trình ngoại ngữ khác</Link>
                 </ul>
              </div>
              </NavLink>
              <Link onClick={handleClickAbout} className="font-medium hover:text-green-900">
              About
              </Link>
              <NavLink to="/contact" className={({isActive})=>{return isActive ? active1 : active}}>
              Contacts
              </NavLink>
            </nav>
            <div className="items-center flex gap-5">
              <Link 
              className="px-4 py-2 text-m font-bold border border-green-500 text-green-700 transition-all duration-150 bg-white rounded shadow outline-none hover:shadow-md focus:outline-none ease">
              Góc học tập
              </Link>
              <Link to="/Login" className="font-medium hover:text-gray-900">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>
    </div>
  );
}

export default Header;
