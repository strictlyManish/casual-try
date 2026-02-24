import { createSlice } from "@reduxjs/toolkit";

const taskReducers = createSlice({
    name:'todos',
    initialState:{
        value:[
            {task:'hello' , id:'23'}

        ]
    },

    reducers:{
        addTask:(state,action)=>{
            state.value.push(action.payload)
        }
    }
});

export const {addTask} = taskReducers.actions;
export default taskReducers.reducer;