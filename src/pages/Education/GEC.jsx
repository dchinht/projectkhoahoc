import { useDispatch, useSelector } from "react-redux";
import EducationLayout from "./EducationLayout/EducationLayout";
import { useEffect } from "react";
import { getListCourse } from "../../redux/slices/courseSlice";

function GeneralEducation() {
  const dispatch = useDispatch();
  const {gecList} = useSelector(state => state.course)

  useEffect(()=> {
     dispatch(getListCourse())
  },[])
  return (
    <div>
        <EducationLayout name="General Education Curruculum" data={gecList}/>
    </div>
  )
}

export default GeneralEducation