import React, { Component } from "react";
import { StyleSheet, Text, View, CheckBox, Dimensions } from "react-native";
import { Button } from "react-native-paper";
const width = Dimensions.get("window").width;
import EnterTodo from "../../../EnterTodo";
class EditableTodo extends Component {
  renderMessage = () => {
    if (this.props.isEditable) {
      return (
        <EnterTodo
          todoTextValue={this.props.todo.todoText}
          onPressKeyDone={this.handleEdit}
        />
      );
    }
    return this.props.todo.todoCompleted ? (
      <Text
        style={{
          textDecorationLine: "line-through",
          textDecorationStyle: "solid"
        }}
      >
        {this.props.todo.todoText}
      </Text>
    ) : (
      <Text
        onLongPress={this.handleEditable}
        todoTextValue={this.props.todo.todoText}
      >
        {this.props.todo.todoText}
      </Text>
    );
  };
  handleEdit = message => {
    this.props.updateTodo(this.props.todo.id, message);
    this.props.handleEditable();
  };
  handleEditable = () => {
    this.props.handleEditable();
  };
  render() {
    return <View>{this.renderMessage()}</View>;
  }
}

export default EditableTodo;
