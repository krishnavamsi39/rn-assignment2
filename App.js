import React from "react";

import TodoApp from "./src/Components/TodoApp";
import LoginPage from "./src/Components/LoginPage";
import { Router, Scene } from "react-native-router-flux";
export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginPage} title="Login" initial />

        <Scene key="todoapp" component={TodoApp} title="TodoApp" />
      </Scene>
    </Router>
  );
}
