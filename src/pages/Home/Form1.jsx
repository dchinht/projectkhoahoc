/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Form1.css"
import { Link } from 'react-router-dom'

function Form1() {
  return (
    <div>
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
    </div>
  )
}

export default Form1