import { configureStore } from "@reduxjs/toolkit";
import allTasksReducer from "../reducers/allTasksSlice";
import taskFormReducer from "../reducers/taskFormSlice";

export default configureStore({
    reducer: {
        allTasks: allTasksReducer,
        taskForm: taskFormReducer
    }
})