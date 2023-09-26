import "../App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  updateTask,
  deleteTask,
  addTask,
} from "../store/slice/AllTaskOperationsSlice";
import {
  Pane,
  Checkbox,
  Heading,
  Button,
  EditIcon,
  TrashIcon,
  Text,
} from "evergreen-ui";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);
  const [checkedTasks, setCheckedTasks] = useState();

  useEffect(() => {
    dispatch(getTasks());
    setCheckedTasks(tasks.map((task) => task.completed))
  }, [dispatch, checkedTasks]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(getTasks());
  };
  console.log(tasks, "tasks")
  return (
    <Pane className="app">
      <Pane className="header">
        <Heading color="gray">Task Management App</Heading>
        <Text className="nav-link">Add New Task</Text>
      </Pane>
      <Pane className="tasks">
        {tasks?.map((task, index) => (
          <Pane key={index} className="task">
            <Checkbox
              className="checkbox"
              label={<Text style={{ fontSize: "15px" }}>{task.title}</Text>}
              checked={checkedTasks[index]}
              onChange={(e) => {
                const updatedCheckedTasks = [...checkedTasks];
                updatedCheckedTasks[index] = e.target.checked;
                setCheckedTasks(updatedCheckedTasks);

                // Veritabanında güncelleme yapma işlemi
                dispatch(
                  updateTask({ id: task._id, completed: e.target.checked })
                );
              }}
            />
            <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
              Edit
            </Button>
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={TrashIcon}
              intent="danger"
              onClick={() => handleDelete(task._id)}
            >
              Delete...
            </Button>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default TaskList;
