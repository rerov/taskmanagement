import "../App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  updateTask,
  deleteTask
} from "../store/slice/AllTaskOperationsSlice";
import {
  Pane,
  Checkbox,
  Button,
  EditIcon,
  TrashIcon,
  Text,
} from "evergreen-ui";


import Header from "../components/header";
import { useNavigate } from "react-router-dom";
function TaskList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const tasks = useSelector((state) => state.tasks.data);
  const [checkedTasks, setCheckedTasks] = useState();

  useEffect(() => {
    dispatch(getTasks());
    setCheckedTasks(tasks.map((task) => task.completed));
  }, [dispatch, checkedTasks]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(getTasks());
  };
  console.log(tasks, "tasks");
  return (
    <Pane className="app">
  <Header />
      <Pane className="tasks">
        {tasks?.map((task, index) => (
          <Pane key={index} className="task">
            <Checkbox
              className="checkbox"
              label={<Text style={{ fontSize: "15px" }}>{task.title}</Text>}
              checked={
                checkedTasks ? checkedTasks[index] : false
              }
              onChange={(e) => {
                const updatedCheckedTasks = [...checkedTasks];
                updatedCheckedTasks[index] = e.target.checked;
                setCheckedTasks(updatedCheckedTasks);
                dispatch(
                  updateTask({ id: task._id, completed: e.target.checked })
                );
              }}
            />
            <Button onClick={() => navigate(`/task/${task._id}/edit`)} marginY={8} marginRight={12} iconBefore={EditIcon}>
              Edit
            </Button>
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={TrashIcon}
              intent="danger"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </Button>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default TaskList;
