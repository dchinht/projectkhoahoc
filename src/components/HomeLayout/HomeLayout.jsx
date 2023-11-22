/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
// import Submit from '../khoahoc/Submit'

function HomeLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        {/* <Submit/> */}
        <Footer/>
    </div>
  )
}

export default HomeLayout