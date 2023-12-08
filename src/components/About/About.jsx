/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import { notification } from '../../utils/helper'

function About({targetRefAbout}) {
   const handlesubmit = () => {
      notification('Submit success')
   }
  return (
    <div ref={targetRefAbout} >
        <div className='fo1'>
           <img style={{ borderRadius:'10px' }} src="https://i.pinimg.com/564x/6f/95/29/6f952953e8674105555093d4434b83ca.jpg" alt="" />
           <div style={{ width:'600px' }}>
              <div>
                <h1 className='h102'>A B O U T<span>U S</span></h1>
                <h1 className='h101'>Innovative Way To Learn</h1>
              </div>
              <div>
                 <h1>
                 The Education online learning platform improves and enhances your learning with many types of teaching combined with data 
                 collection and processing technology for each lesson. The first education start-up in Southeast Asia was funded by the
                 investment fund co-founded by Microsoft. Top 10 businesses receiving the "Vietnam Leading Brand 2023" award.
                 </h1>
              </div>
              <Link to="/contact">
                 <button className='bu101'>Contact Us</button>
              </Link>
           </div>
        </div>
        <div>
        <div className='fo'>
           <img src="https://cdn.marathon.edu.vn/uploads/SDpxrxgfVhsQQFQR4TH5opCO0XeF5QInsAQrnSBW.png" alt="" />
           <div style={{ width:'600px' }}>
              <div className='flex gap-4'>
                <h1 className='h1'>Đăng Ký</h1>
                <h1 className='h1' style={{ color:"rgb(33, 155, 103)" }}>Học Thử</h1>
              </div>
              <div>
                 <input className='in1' type="text" placeholder='  Họ tên'/>
                 <input className='in1' type="text" placeholder='  Số điện thoại'/>
                 <input className='in1' type="email" placeholder='  Địa chỉ email'/>
                 <input className='in1' type="text" placeholder='  Môn học quan tâm?'/>
              </div>
              <Link to="" className='bucha'>
                 <button onClick={handlesubmit} className='bu11'>GửI</button>
              </Link> 
           </div>
        </div>
        </div>
    </div>
  )
}

export default About