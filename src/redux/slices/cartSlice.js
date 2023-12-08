import { createSlice } from "@reduxjs/toolkit"
import {notification } from "../../utils/helper"

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const initialState = {
   cartList : [...cart]
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart (state,action){
            let updateCart = [...state.cartList]
            let index = updateCart.findIndex(x => x.id === action.payload.id)
            if ( index != -1){
                notification('nonoo','error')
            }else{
                updateCart.push(action.payload)
                state.cartList = updateCart
                localStorage.setItem("cart",JSON.stringify(state.cartList));
                notification('add to cart success')
            }         
        },
        deleteCart (state,action){
            
            let updateCart = [...state.cartList]
            let index = updateCart.findIndex(xx => xx.id === action.payload.id)
            if(index != -1){
                    updateCart.splice(index,1);
                    state.cartList = updateCart;
                    localStorage.setItem("cart",JSON.stringify(state.cartList));
                    // notification('Delete success');
            }
            
        }
    }
})

export const {addToCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer