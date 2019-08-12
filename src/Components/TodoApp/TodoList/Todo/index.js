import React, { Component } from "react";
import { StyleSheet, Alert, View, CheckBox, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import EditableTodo from "./EditableTodo";
const width = Dimensions.get("window").width;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
  }
  handleEditable = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };
  handleDelete = () => {
    Alert.alert(
      "Alert ",
      "Are you sure you want to delete",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.deleteTodo(this.props.todo.id) }
      ],
      { cancelable: false }
    );
  };
  handleToggle = () => {
    console.log(this.props.todo.id);
    this.props.onToggleTaskCompletetion(this.props.todo.id);
  };
  render() {
    return (
      <View style={styles.box}>
        <CheckBox
          value={this.props.todo.todoCompleted}
          onValueChange={this.handleToggle}
        />
        <EditableTodo
          toggle={this.props.toggle}
          updateTodo={this.props.updateTodo}
          todo={this.props.todo}
          isEditable={this.state.isEditable}
          handleEditable={this.handleEditable}
        />

        <Button
          style={styles.button}
          icon="delete"
          onPress={this.handleDelete}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: width,
    height: 70,
    borderWidth: 0.5,
    borderColor: "grey"
  },
  button: {
    position: "absolute",
    right: 5
  }
});
export default Todo;
