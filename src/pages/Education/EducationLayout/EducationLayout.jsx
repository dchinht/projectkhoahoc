/* eslint-disable react/prop-types */
import CouseList from "../../../components/CourseList/CouseList"
import "./EducationLayout.css"

function EducationLayout({name,data}) {
    return (
        <div >
          <div style={{ textAlign: 'center' }}>
            <h1 className="fontea12">{name}</h1>
          </div>
            <div className="bac2">
              <div className="bac12">
                {data.map((item,index)=>(
                  <CouseList item={item} key={index} />
                ))}    
              </div>
            </div>
            <br/> <br/>
        </div>
)}

export default EducationLayout