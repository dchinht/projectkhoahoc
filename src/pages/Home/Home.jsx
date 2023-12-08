/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import "./Home.css"
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import About from '../../components/About/About'
import Teacher from '../../components/Teacher/Teacher'
import CouseItem from '../../components/CourseList/CouseItem'

function HomePage() {
  const targetRefAbout = useRef(null);

  const handleClickAbout = () => {
    targetRefAbout.current.scrollIntoView({behavior : 'smooth'})
  }

  const targetRefTeacher = useRef(null);

  const handleClickTeacher = () => {
    targetRefTeacher.current.scrollIntoView({behavior : 'smooth'})
  }

  const targetRefCourse = useRef(null);

  const handleClickCourse = () => {
    targetRefCourse.current.scrollIntoView({behavior : 'smooth'})
  }
  return (
    <div>
        <HomeLayout handleClickCourse={handleClickCourse} handleClickTeacher={handleClickTeacher} handleClickAbout={handleClickAbout} >
            <div>
                <div className='home'>
                    <div style={{ paddingTop: '300px' }} >
                        <h1 className='chu1'>BEST ONLINE COURSES</h1>
                        <h1 className='chu2'>New Way To Learn From Home</h1>
                        <Link to="/contact">
                           <button className='bu1'>Contact Us</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div style={{ marginTop:'100px' }}>
                <Carousel/>
            </div>
            <div>
                <About targetRefAbout={targetRefAbout} />
            </div> 
            <div>
                <CouseItem targetRefCourse={targetRefCourse} />
            </div>
            <div>
                <Teacher targetRefTeacher={targetRefTeacher} />
            </div><br/> <br/>
        </HomeLayout>
    </div>
  )
}

export default HomePage