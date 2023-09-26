import { configureStore } from "@reduxjs/toolkit";
import AllTaskOperationsSlice from "./slice/AllTaskOperationsSlice";

const store = configureStore({
    reducer: {
        tasks: AllTaskOperationsSlice.reducer
    }
})

export default store; 