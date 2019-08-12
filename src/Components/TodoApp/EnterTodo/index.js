import React, { Component } from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.todoTextValue };
  }
  onPressDone = () => {
    if (this.state.text != "") this.props.onPressKeyDone(this.state.text);
  };
  handleDisplay = () => {
    const { textstyle } = this.props;
    return (
      <TextInput
        placeholder="What needs to be done?"
        style={styles.textstyle}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        onSubmitEditing={this.onPressDone}
      />
    );
  };
  render() {
    return <>{this.handleDisplay()}</>;
  }
}
const styles = StyleSheet.create({
  textInput: {
    position: "absolute",
    width: width,
    marginTop: 70,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "white"
  },
  edit: {
    position: "relative",
    width: 200
  }
});
export default EnterTodo;
