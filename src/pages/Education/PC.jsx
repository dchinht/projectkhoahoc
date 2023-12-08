import { useDispatch, useSelector } from "react-redux";
import EducationLayout from "./EducationLayout/EducationLayout";
import { useEffect } from "react";
import { getListCourse } from "../../redux/slices/courseSlice";

function Programming() {
  const dispatch = useDispatch();
  const {pcList} = useSelector(state => state.course)

  useEffect(()=> {
     dispatch(getListCourse())
  },[])
  return (
    <div>
        <EducationLayout name="General Education Curruculum" data={pcList}/>
    </div>
  )
}

export default Programming