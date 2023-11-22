/* eslint-disable no-unused-vars */
import React from 'react'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import "./Home.css"
import Form from './Form'
import Form1 from './Form1'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <HomeLayout>
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
            <div>
                <Form1/>
            </div>
            <div>
                <Form/>
            </div> <br/> <br/>
        </HomeLayout>
    </div>
  )
}

export default HomePage