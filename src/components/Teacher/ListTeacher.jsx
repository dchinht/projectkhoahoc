/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ListTeacher({item}) {
  return (
    <div>
        <div className='pro'> 
                <img style={{ marginBottom:'20px',borderRadius:'10px', height:"300px",width:'300px'}} src={item.img} alt="" />
                <div style={{ textAlign:'center' }}>
                   <b style={{fontSize:"20px"}}>{item.name}</b>
                   <h1>{item.mon}</h1>
                </div>
        </div>
    </div>
  )
}

export default ListTeacher