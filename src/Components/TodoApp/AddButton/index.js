import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = { displayAddButton: true };
  }
  handlePress = () => {
    this.setState({
      displayAddButton: !this.state.displayAddButton
    });
  };
  render() {
    return <ActionButton buttonColor="blue" onPress={this.handlePress} />;
  }
}

export default AddButton;
