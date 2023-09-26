import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./screens/TaskList";
import AddTask from "./screens/AddTask";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/add"  element={<AddTask />} />
        {/* <Route path="/task/:id" exact component={TaskDetail} />
          <Route path="/task/:id/edit" exact component={TaskForm} /> */}
      </Routes>
    </div>
  );
}

export default App;
