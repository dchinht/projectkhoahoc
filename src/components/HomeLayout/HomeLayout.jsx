/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader.jsx'

function HomeLayout({children,handleClickCourse,handleClickAbout,handleClickTeacher})  {
  const {isLoadingEduType} = useSelector(state => state.eduType)
  const {isLoadingTeacher} = useSelector(state => state.teacher)
  const {isLoadingCourse} = useSelector(state => state.teacher)
  const {isLoadingSignUp} = useSelector(state => state.teacher)

  return (
    <div>
        {(isLoadingEduType || isLoadingSignUp || isLoadingCourse || isLoadingTeacher) && <Loader/>}
        {/* <Loader/> */}
        <Header handleClickCourse={handleClickCourse} handleClickTeacher={handleClickTeacher} handleClickAbout={handleClickAbout}/>
        {children}
        <Footer/>
    </div>
  )
}

export default HomeLayout