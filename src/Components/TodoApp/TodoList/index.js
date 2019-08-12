import React, { Component } from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import Todo from "./Todo";
import Footer from "./Footer";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAction: "all" };
  }
  changeAll = () => {
    this.setState({ selectedAction: "all" });
  };
  changeActive = () => {
    this.setState({ selectedAction: "active" });
  };
  changeCompleted = () => {
    this.setState({ selectedAction: "completed" });
  };
  filterList = () => {
    let filteredList = [];

    if (this.state.selectedAction === "active") {
      filteredList = this.props.todoList.filter(
        todo => todo.todoCompleted === false
      );
    } else if (this.state.selectedAction === "completed") {
      filteredList = this.props.todoList.filter(
        todo => todo.todoCompleted === true
      );
    } else {
      filteredList = this.props.todoList;
    }
    console.log(filteredList);
    return filteredList;
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={this.filterList()}
          extraData={this.props}
          renderItem={({ item }) => (
            <Todo
              updateTodo={this.props.updateTodo}
              onToggleTaskCompletetion={this.props.onToggleTaskCompletetion}
              deleteTodo={this.props.deleteTodo}
              todo={item}
            />
          )}
        />

        <View style={styles.footer}>
          <Footer
            active={this.state.selectedAction}
            changeAll={this.changeAll}
            changeActive={this.changeActive}
            changeCompleted={this.changeCompleted}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  footer: {
    position: "absolute",
    top: height - 160,
    width: width
  }
});
export default TodoList;
