import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./screens/TaskList";
import AddTask from "./screens/AddTask";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
