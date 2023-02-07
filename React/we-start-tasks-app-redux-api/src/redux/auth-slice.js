const { createSlice } = require("@reduxjs/toolkit");

let authSlice = createSlice({
    name:'auth-slice',
    initialState:{
        loggedIn:JSON.parse( localStorage.getItem('logged_in')),
},
    reducers:{
        login(state,action) {
            state.loggedIn = true;
        },
        register(state,action) {
            state.loggedIn = true;
        },
        logout(state,action) {
            state.loggedIn = false;
        },
    },

});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;