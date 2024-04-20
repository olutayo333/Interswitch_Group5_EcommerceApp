import {createSlice} from '@reduxjs/toolkit';
let oldCart= JSON.parse(localStorage.getItem("productDetail1"))

const counterSlice = createSlice ({
    name:'counter',
    initialState:{
        count:0, 
        cartItems:[{name:"tayo", age:10}],
        productName:[],
    },
    reducers:{
        increament:(state)=>{
            state.count += 1
        },
        addItem:(state)=>{
            state.cartItems.push(props)
        }
    }
  })
  export const {increament, addItem} = counterSlice.actions
  export default counterSlice.reducer