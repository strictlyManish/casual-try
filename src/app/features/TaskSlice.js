import { createSlice } from "@reduxjs/toolkit";

const taskReducers = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addTask ,removeTodo } = taskReducers.actions;
export default taskReducers.reducer;
