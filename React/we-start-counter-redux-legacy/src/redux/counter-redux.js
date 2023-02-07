import { createStore } from "redux"

// let counterActions =() => {}
let initialState = { counter : 0 , visible : true};
let reducerFunction = (state = initialState, action) => {
    if(action.type == 'Increment'){
        state = {
            counter: state.counter + 1,
            visible: state.visible,
        };
    }
    if(action.type == 'Decrement'){
        state = {
            counter: state.counter - 1,
            visible: state.visible,
        };
    }
    if(action.type == "Toggle"){
        state={
            counter:state.counter ,
            visible:!state.visible,
        }
    }
    if(action.type == "IncrementByValue"){
        state={
            counter:state.counter + action.value,
            visible:state.visible,
        }
    }
    return state;
}

export const counterStore = createStore(reducerFunction);

/**
 * Redux
 *  -Store
 */