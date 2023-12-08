import { configureStore } from "@reduxjs/toolkit";
import eduTypeLists from "./slices/eduTypeList"; 
import teacherReducer from "./slices/teacherSlice";
import courseReducer from "./slices/courseSlice";
import signUpReducer from "./slices/signUpSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer : {
        eduType: eduTypeLists,
        teacher: teacherReducer,
        course : courseReducer,
        signUp : signUpReducer,
        cart : cartReducer,
    }
})