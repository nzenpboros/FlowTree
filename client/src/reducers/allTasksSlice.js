/* allTasksSlice
*  (not tested)
*/

import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "allTasks",
    initialState: [],
    reducers: {
        loadAllTasks: (state, action) => {
            return action.payload;
        }, 
        addTask: (state, action) => {
            return [...state, action.payload];
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id);
        }, 
        //do we want to rewrite the state for the entire task or just the changed fields
        updateTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                const updatedTask = {...task, ...action.payload};
                return [...state, ...updatedTask];
            }
            return state;
            //return [...state, action.payload];
        }
    }
}

const allTasksSlice = createSlice(options);
export const { loadAllTasks, addTask, removeTask } = allTasksSlice.actions;
export default allTasksSlice.reducer;

// functions
export const getAllTasks = (state) => state.allTasks;

//fetch from database