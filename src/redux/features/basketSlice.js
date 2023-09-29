import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../../Data'


const initialState = {
    products: storeData,
    amount: 0,
    total: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        increment:(state,{payload}) => {
            state.products.map(item=>{
                if(item.name == payload){
                    item.amount++
                }
                return item
            })
        },
        decrement: (state,{payload}) => {
            state.products.map(item=>{
                if(item.name == payload){
                    item.amount--
                }
                return item
            })
        },
        removeItem: (state, {payload})=>{
            state.products = state.products.filter(item=>(item.name !== payload))
            
        },
        updateStore:(state)=>{
            let total = 0
            let amount = 0
            state.products.forEach(item=>{
                total += item.price * item.amount
                amount += item.amount
            })
            state.amount = amount
            state.total = total
        }
    }
})

export default basketSlice.reducer
export const {increment, decrement, removeItem, updateStore} = basketSlice.actions