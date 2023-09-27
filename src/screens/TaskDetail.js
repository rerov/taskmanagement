import "../App.css";

import React, { useEffect, useState } from "react";

import {
  Pane,
  Text,
  Checkbox,
  Heading,
} from "evergreen-ui";

import { useDispatch } from "react-redux";
import { getTaskById } from "../store/slice/AllTaskOperationsSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getTaskById(id)).then((data) => {
      setChecked(data.payload.completed);
      setTitle(data.payload.title);
      setDescription(data.payload.description);
    });
  }, []);

  return (
    <Pane className="app">
      <Header />
      <Pane className="tasks taskDetail">
        <Pane className="form">
          <Pane className="form-field">
            <Heading>Title</Heading>
            <Text>{title}</Text>
          </Pane>
          <Pane className="form-field">
            <Heading>Description</Heading>
            <Text minHeight={200}>{description}</Text>
          </Pane>
          <Pane className="form-field">
            <Heading>Completed</Heading>
            <Checkbox
              className="checkbox"
             
              checked={checked}
              disabled
            />
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default TaskDetail;
