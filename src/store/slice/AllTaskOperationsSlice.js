import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiUrl } from "../ApiUrl";
export const getTasks = createAsyncThunk(
  "getTasks",
  async (object, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${ApiUrl}/api/tasks`);
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const addTask = createAsyncThunk(
  "addTask",
  async (taskData, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${ApiUrl}/api/tasks`, taskData);

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateTask = createAsyncThunk(
  "updateTask",
  async (taskData, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${ApiUrl}/api/tasks/${taskData.id}`,
        taskData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (taskID, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${ApiUrl}/api/tasks/${taskID}`);
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getTaskById = createAsyncThunk(
  "getTaskById",
  async (taskID, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${ApiUrl}/api/tasks/${taskID}`);
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const AllTaskOperationsSlice = createSlice({
  name: "Tasks",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isSuccess = true;
      state.error = null;
    },
    [getTasks.rejected]: (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
      state.error = action.payload;
    },
  },
});

export default AllTaskOperationsSlice;
