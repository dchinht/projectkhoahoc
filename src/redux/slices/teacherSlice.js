import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getListTeacher = createAsyncThunk("getListTeacher", async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "teacherlist")
    return res.data
})

const initialState = {
    isLoadingTeacher : false,
    teacherList : [],
    isErro : false,
    message : ''
}

const teacherSlice = createSlice({
    name : 'teacher',
    initialState,
    extraReducers : (builder) => {
       builder.addCase(getListTeacher.pending, (state)=> {
        state.isLoadingTeacher = true;
       });
       builder.addCase(getListTeacher.fulfilled,(state,action)=>{
        state.isLoadingTeacher = false;
        state.teacherList = [...action.payload]
       });
       builder.addCase(getListTeacher.rejected,(state)=>{
        state.isLoadingTeacher = false;
        state.isErro = true;
        state.message = 'error , please try'
       })
    }

})

export default teacherSlice.reducer;