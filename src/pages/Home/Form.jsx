/* eslint-disable no-unused-vars */
import React from 'react'
import "./Form.css"
import { Link } from 'react-router-dom'

function Form() {
  return (
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
                 <button className='bu11'>GửI</button>
              </Link> 
           </div>
        </div>
    </div>
  )
}

export default Form