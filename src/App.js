import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./screens/TaskList";
import AddTask from "./screens/AddTask";
import UpdateTask from "./screens/UpdateTask";
import TaskDetail from "./screens/TaskDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/add"  element={<AddTask />} />
         <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/task/:id/edit" element={<UpdateTask/>} /> 
      </Routes>
    </div>
  );
}

export default App;
