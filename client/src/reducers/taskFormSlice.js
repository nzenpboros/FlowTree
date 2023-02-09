/* TaskFormSlice
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null, //randomly generate at time of submit
    taskName: "",
    impact: 3, //default
    effort: 3, //default
    urgency: 3, //default
    tags: [], 
    due: (new Date()).toString(), //date and time, 
    notes: "", 
};

export const taskFormSlice = createSlice({
    name: "TaskForm",
    initialState: initialState,
    reducers: {
        loadTaskDetails: (state, action) => {
            return state;
        },
        updateTaskDetails: (state, action) => {
            console.log("soon to be updated state", {...state, ...action.payload})
            return {...state, ...action.payload};
        },
        resetForm: (state, action) => {
            return initialState;
        }, 
        submitForm: (state, action) => {
            //async post 
        },
        formError: (state, action) => {
            return action.error;
        }
    }
});

// selectors
export const getTask = (state) => state.taskForm;

export const { loadTaskDetails, updateTaskDetails, resetForm } = taskFormSlice.actions;
export default taskFormSlice.reducer;
