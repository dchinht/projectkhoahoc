/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Teacher.css"
import ListTeacher from "./ListTeacher";

function Teacher({targetRefTeacher}) {
  const listteacher = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/640px-Bill_Gates_2018.jpg",
      name: "Bill Gates",
      mon : "Phần mềm máy tính"
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/5/52/John_D._Rockefeller%2C_Sr.jpg",
      name: "J.D.Rockerfeller",
      mon : "Dầu mỏ"
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/250px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
      name: "Elon Musk",
      mon : "Xe điện"
    },
    {
      id: 4,
      img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-849879716.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
      name: "Waren Buffett",
      mon : "Đầu tư"
    },
  ];
  return (
    <div ref={targetRefTeacher}>
      <div style={{ textAlign: 'center' }}>
        <h1 className="fontea">T E A C H E R S</h1>
        <h1 className="fontea1">Meet Our Teachers</h1>
      </div>
        <div className="bac">
          <div className="bac1">
            {listteacher.map((item,index)=>(
              <ListTeacher item={item} key={index} />
            ))}    
          </div>
        </div>
        <br />  <br />
    </div>
  );
}

export default Teacher;
