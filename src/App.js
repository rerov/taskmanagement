import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  updateTask,
  deleteTask,
  addTask,
} from "./store/slice/AllTaskOperationsSlice";
import {
  Pane,
  Checkbox,
  Heading,
  Button,
  EditIcon,
  TrashIcon,
  Text,
} from "evergreen-ui";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [checked, setCheched] = useState(false);
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Pane className="app">
      <Heading color="gray">Task Management App</Heading>
      <Pane className="tasks">
        <Pane className="task">
          <Checkbox
            className="checkbox"
            label={<Text style={{ fontSize: "15px" }}>Benim Özel Metnim</Text>}
            checked={checked}
            onChange={(e) => setCheched(e.target.checked)}
          />
          <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
            Edit
          </Button>
          <Button
            marginY={8}
            marginRight={12}
            iconBefore={TrashIcon}
            intent="danger"
          >
            Delete...
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
