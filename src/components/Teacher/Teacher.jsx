/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Teacher.css"
import ListTeacher from "./ListTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getListTeacher } from "../../redux/slices/teacherSlice";

function Teacher({targetRefTeacher}) {

  const [listTeacher,setTeacherlist] = useState([]);
  const {teacherList} = useSelector (state => state.teacher)
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getListTeacher())
  },[])

  return (
    <div ref={targetRefTeacher}>
      <div style={{ textAlign: 'center' }}>
        <h1 className="fontea">T E A C H E R S</h1>
        <h1 className="fontea1">Meet Our Teachers</h1>
      </div>
        <div className="bac">
          <div className="bac1">
            {teacherList.map((item,index)=>(
              <ListTeacher item={item} key={index} />
            ))}    
          </div>
        </div>
        <br />  <br />
    </div>
  );
}

export default Teacher;
