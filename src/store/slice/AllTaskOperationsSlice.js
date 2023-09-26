import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getTasks = createAsyncThunk("getTasks", async(object, {getState, rejectWithValue}) => {
    try {
        const {data} = await axios.get("http://localhost:8000/api/tasks")
        return data; 
    } catch (error) {
        rejectWithValue(error.response)   
    }
})

export const addTask = createAsyncThunk("addTask", async (taskData, {getState, rejectWithValue}) => {
    try {
        console.log(taskData, "taskData")
        const {data} = await axios.post("http://localhost:8000/api/tasks", taskData)
        console.log(data, "datatfadslfjalksjfljl")
        return data; 
    } catch (error) {
        return rejectWithValue(error.response)
        
    }
})

export const updateTask = createAsyncThunk("updateTask", async (taskData, {getState, rejectWithValue}) => {
    try {
        const {data} = await axios.put(`http://localhost:8000/api/tasks/${taskData.id}`, taskData)
        console.log(data)
        return data; 

        
    } catch (error) {
        return rejectWithValue(error.response)
        
    }
})

export const deleteTask = createAsyncThunk("deleteTask", async (taskID, {getState, rejectWithValue}) => {
    try {
        const {data} = await axios.delete(`http://localhost:8000/api/tasks/${taskID}`);
        return data; 
    } catch (error) {
        rejectWithValue(error.response)    
    }
})


const AllTaskOperationsSlice = createSlice({
    name: 'Tasks', 
    initialState: {
        data: [], 
        loading: false, 
        isSuccess: false, 
        message: ""
    }, 
    reducers: {}, 
    extraReducers: {
        [getTasks.pending]: (state, action) => {
            state.loading = true 
        }, 
    [getTasks.fulfilled]: (state, action) => {
        state.data = action.payload; 
        state.loading = false; 
        state.isSuccess = true
    },
    [getTasks.rejected]: (state, action) => {
        state.loading = false;
        state.isSuccess = false; 
        state.message = 'failed';
    }    
    }
})

export default AllTaskOperationsSlice; 