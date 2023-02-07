const { createSlice } = require("@reduxjs/toolkit");


let categoriesSlice = createSlice({
    name:"categories-slice",
    initialState:{data:[], category: {}},
    reducers:{
        create(state,action) {
            state.data.push(action.payload);
        },
        read(state,action) {
            state.data = action.payload;
        },
        edit(state,action){
            state.category = state.data.find((element) => element.id == action.payload);
        },
        update(state,action) {
            let index = state.data.findIndex((element) => element.id == action.payload.category.id);
            state.data[index] = action.payload.category;
            // console.log("UPDATED")
        },
        delete(state,action) {
            let filteredData = state.data.filter((element) => element.id != action.payload);
            state.data = filteredData;
        }
    }
});
export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;