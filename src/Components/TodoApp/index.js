import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import EnterTodo from "./EnterTodo";
import ActionButton from "react-native-action-button";
import TodoList from "./TodoList";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.random = 0;
    this.state = { todoList: [], displayTodoList: true };
  }
  updateEachTodo = (id, message) => {
    const todos = this.state.todoList;
    todos.some(todo => {
      if (todo.id === id) todo.todoText = message;
    });
    this.setState({
      todoList: todos
    });
  };
  deleteTodo = id => {
    this.setState({
      todoList: this.state.todoList.filter(obj => obj.id !== id)
    });
  };
  addTodo = message => {
    let obj = { todoCompleted: false, todoText: message, id: this.random + 1 };
    this.random = this.random + 1;
    const todos = this.state.todoList;
    todos.push(obj);
    this.setState({
      todoList: todos
    });
    this.setState({
      displayTodoList: true
    });
  };
  onToggleTaskCompletetion = id => {
    const todos = this.state.todoList;

    todos.some(todo => {
      if (todo.id === id) todo.todoCompleted = !todo.todoCompleted;
    });
    this.setState({
      todoList: todos
    });
  };
  handleAddButton = () => {
    this.setState({ displayTodoList: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white" }}>Header</Text>
        </View>
        {!this.state.displayTodoList ? (
          <EnterTodo onPressKeyDone={this.addTodo} todoTextValue="" />
        ) : (
          <TodoList
            onToggleTaskCompletetion={this.onToggleTaskCompletetion}
            todoList={this.state.todoList}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateEachTodo}
          />
        )}

        <ActionButton
          style={styles.button}
          buttonColor="blue"
          onPress={this.handleAddButton}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 50,
    width: width,
    backgroundColor: "blue",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    position: "absolute",
    bottom: 40
  }
});
export default TodoApp;
