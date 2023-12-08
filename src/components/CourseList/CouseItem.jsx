/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CouseList from './CouseList';
import { useDispatch, useSelector } from 'react-redux';
import { getListCourse } from '../../redux/slices/courseSlice';

function CourseItem({targetRefCourse}) {

    const {CourseList} = useSelector(state => state.course);
    const dispatch = useDispatch();
    useEffect(()=> {
       dispatch(getListCourse())
    },[]);
  
    return (
      <div ref={targetRefCourse}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="fontea2">K H Ó A  H Ọ C</h1>
          <h1 className="fontea12">CHƯƠNG TRÌNH HOT</h1>
        </div>
          <div className="bac2">
            <div className="bac12">
              {CourseList.slice(-5).map((item,index)=>(
                <CouseList item={item} key={index} />
              ))}    
            </div>
          </div>
          <br />  <br />
      </div>
    )
}

export default CourseItem