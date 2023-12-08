import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getListEduType = createAsyncThunk("getListEduType", async () => {
    const res = await axios.get("http://localhost:5000/eduType")
    return res.data
})

const initialState = {
    isLoadingEduType : false,
    eduTypeList : [],
    isErro : false,
    message : ''
}

const eduTypeSlice = createSlice({
    name : 'eduType',
    initialState,
    extraReducers : (builder) => {
       builder.addCase(getListEduType.pending, (state)=> {
        state.isLoadingEduType = true;
       });
       builder.addCase(getListEduType.fulfilled,(state,action)=>{
        state.isLoadingEduType = false;
        state.eduTypeList = [...action.payload]
       });
       builder.addCase(getListEduType.rejected,(state)=>{
        state.isLoadingEduType = false;
        state.isErro = true;
        state.message = 'error , please try'
       })
    }

})

export default eduTypeSlice.reducer;