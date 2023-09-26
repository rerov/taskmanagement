import "../App.css";

import React, {  useState } from "react";

import {
  Pane,
  Heading,
  TextInputField,
  Text,
  Textarea,
  Checkbox,
  Button,
} from "evergreen-ui";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slice/AllTaskOperationsSlice";
import { useNavigate } from 'react-router-dom';
const AddTask = () => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const handleSubmission = () => {
        dispatch(addTask({title:title, description: description, completed: checked}))
        .then(() => {
            navigate("/")
        })
        

    }
  return (
    <Pane className="app">
      <Pane className="header">
        <Heading color="gray">Task Management App</Heading>
        <Text className="nav-link">
          <Link to="/task/add">Add New Task</Link>
        </Text>
      </Pane>
      <Pane className="tasks">
        <Pane className="form">
          <Pane className="form-field">
            <Text>Give your task a title</Text>
            <TextInputField label="" onChange={(e) => setTitle(e.target.value)} placeholder="start typing a title..." />
          </Pane>

          <Pane className="form-field">
            <Text>Description of the Task</Text>
            <Textarea
              minHeight={250}
              name="textarea-1"
              placeholder="Textarea placeholder..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Pane>
          <Pane className="form-field">
            <Checkbox
              className="checkbox"
              label={<Text style={{ fontSize: "15px" }}>Completed</Text>}
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Pane>
          <Pane className="form-field">
            <Button onClick={handleSubmission} marginRight={16} intent="success">
              Save
            </Button>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default AddTask;
