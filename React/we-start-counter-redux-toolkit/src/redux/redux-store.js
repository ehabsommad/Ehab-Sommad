import { configureStore, createSlice } from "@reduxjs/toolkit";


let counterSlice = createSlice({
    name:"counter-slice",
    initialState:{counter:10, visible:true},
    reducers:{
        increment(state,action){
            state.counter = state.counter + 1;
        },
        decrement(state,action){
            state.counter = state.counter - 1;
        },
        incrementByValue(state,action){
            state.counter = state.counter + action.payload.value
        },
        toggle(state,action){
            state.visible = !state.visible
        },
    },
});
export const reduxStore = configureStore({reducer:counterSlice.reducer});
export const counterActions = counterSlice.actions;