/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function HomeLayout({children,handleClickAbout,handleClickTeacher}) {
  return (
    <div>
        <Header handleClickTeacher={handleClickTeacher} handleClickAbout={handleClickAbout}/>
        {children}
        <Footer/>
    </div>
  )
}

export default HomeLayout