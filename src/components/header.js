import "../App.css";

import React from "react";

import {
  Pane,
  Heading,
  Text,
} from "evergreen-ui";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Pane className="header">
      <Heading color="gray">
        <Link className="link" to="/">Task Management App</Link>
      </Heading>
      <Text className="nav-link">
        <Link className="link" to="/task/add">Add New Task</Link>
      </Text>
    </Pane>
  );
};


export default Header; 