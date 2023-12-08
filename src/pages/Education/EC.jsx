import { useDispatch, useSelector } from "react-redux";
import EducationLayout from "./EducationLayout/EducationLayout";
import { useEffect } from "react";
import { getListCourse } from "../../redux/slices/courseSlice";

function English() {
    const dispatch = useDispatch();
    const {ecList} = useSelector(state => state.course)
  
    useEffect(()=> {
       dispatch(getListCourse())
    },[])
    return (
      <div>
          <EducationLayout name="General Education English" data={ecList}/>
      </div>
    )
  }
export default English