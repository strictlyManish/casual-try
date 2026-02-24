import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./features/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducers,
  },
});

export default store;
