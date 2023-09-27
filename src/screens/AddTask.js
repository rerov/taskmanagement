import "../App.css";

import React, { useState } from "react";

import {
  Pane,
  TextInputField,
  Text,
  Textarea,
  Checkbox,
  Button,
  toaster
} from "evergreen-ui";

import { useDispatch } from "react-redux";
import { addTask } from "../store/slice/AllTaskOperationsSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const AddTask = () => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmission = () => {
    if (title && description) {
      dispatch(
        addTask({ title: title, description: description, completed: checked })
      ).then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err, "errr"))
    }
    else {
      toaster.warning('Make sure you fill in all fields.')

    }
  };
  return (
    <Pane className="app">
      <Header />
      <Pane className="tasks">
        <Pane className="form">
          <Pane className="form-field">
            <Text>Give your task a title</Text>
            <TextInputField
              label=""
              onChange={(e) => setTitle(e.target.value)}
              placeholder="start typing a title..."
              
            />
          </Pane>

          <Pane className="form-field">
            <Text>Description of the Task</Text>
            <Textarea
              minHeight={250}
              name="textarea-1"
              placeholder="start typing the description..."
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
            <Button
              onClick={handleSubmission}
              marginRight={16}
              intent="success"
            >
              Save
            </Button>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default AddTask;
