import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getListCourse = createAsyncThunk("getListCourse", async () => {
    const res = await axios.get("http://localhost:5000/couselist")
    return res.data
})

const initialState = {
    isLoadingCourse : false,
    CourseList : [],
    gecList : [],
    ecList : [],
    pcList : [],
    isErro : false,
    message : ''
}

const CourseSlice = createSlice({
    name : 'course',
    initialState,
    extraReducers : (builder) => {
       builder.addCase(getListCourse.pending, (state)=> {
        state.isLoadingCourse = true;
       });
       builder.addCase(getListCourse.fulfilled,(state,action)=>{
        state.isLoadingCourse = false;
        state.CourseList = [...action.payload]

        // kiểm tra type theo từng mục list education
        state.gecList = [...action.payload].filter(xxx => xxx.type == 'gec')
        state.ecList = [...action.payload].filter(xxxx => xxxx.type == 'ec')
        state.pcList = [...action.payload].filter(xxxxx => xxxxx.type == 'pc')
       });
       builder.addCase(getListCourse.rejected,(state)=>{
        state.isLoadingCourse = false;
        state.isErro = true;
        state.message = 'error , please try'
       })
    }

})

export default CourseSlice.reducer;