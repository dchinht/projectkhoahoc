/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom"
import "./CouseList.css"
import React from 'react'

function CouseList({item}) {
  return (
    <Link to={`/education/${item.id}`}>
    <div>
        <div className='pro2'> 
                <img style={{ borderRadius:'10px' }} src={item.img} alt="" />
                <div style={{ display: 'flex',justifyContent: 'center',gap:'50px',marginTop:'20px' }}>
                  <button style={{ width: '100px',height:'30px',backgroundColor:'lightgreen',border: '2px solid green', borderRadius:'10px' }}>Bộ giáo dục</button>
                  <button style={{ width: '100px',height:'30px',backgroundColor:'rgb(253 236 236)',border: '2px solid pink',borderRadius:'10px' }}>2023-2024</button>
                </div>
                <div>
                   {/* <h1 style={{ marginLeft:'50px'}}></h1> */}
                   <b style={{ marginTop: '10px',display:'flex', justifyContent:'center' }}>{item.name}</b>
                </div>
        </div>
    </div>
    </Link>
  )
}

export default CouseList