import "../App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  updateTask,
  deleteTask,
} from "../store/slice/AllTaskOperationsSlice";
import {
  Pane,
  Checkbox,
  Button,
  EditIcon,
  TrashIcon,
  Text,
  toaster,
} from "evergreen-ui";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
function TaskList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.data);
 
  const [checkedTasks, setCheckedTasks] = useState();
 
  useEffect(() => {
    dispatch(getTasks());
    setCheckedTasks(tasks?.map((task) => task.completed));
  }, [dispatch, checkedTasks]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(getTasks())
    
  };
  useEffect(() => {
    if(tasks === undefined){
      toaster.danger('A problem occured during the connection to the server. The app might not perform well.')
    }
  }, [tasks])
  return (
    <Pane className="app">
      <Header />
      <Pane className="tasks">
        {tasks?.map((task, index) => (
          <Pane key={index} className="task">
            <Checkbox
              className="checkbox"
              checked={checkedTasks ? checkedTasks[index] : false}
              onChange={(e) => {
                const updatedCheckedTasks = [...checkedTasks];
                updatedCheckedTasks[index] = e.target.checked;
                setCheckedTasks(updatedCheckedTasks);
                dispatch(
                  updateTask({ id: task._id, completed: e.target.checked })
                );
              }}
            />
            <Link
              style={{ flex: 1, marginLeft: "10px" }}
              to={`/task/${task._id}`}
            >
              <Text>{task.title}</Text>
            </Link>
            <Button
              onClick={() => navigate(`/task/${task._id}/edit`)}
              marginY={8}
              marginRight={12}
              iconBefore={EditIcon}
            >
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
        {
          tasks.length === 0 && (
            <Text>0 task</Text>
          )
        }
      </Pane>
    </Pane>
  );
}

export default TaskList;
