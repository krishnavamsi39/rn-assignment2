import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { getCurrentFrame } from "expo/build/AR";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handlePress = () => {
    alert(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <TextInput
          placeholder="What needs to be done?"
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button color="green" title="OK!" onPress={this.handlePress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    position: "absolute",

    top: 50,
    height: 30,
    width: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "white"
  },
  button: {
    position: "absolute",

    top: 80,
    color: "green"
  }
});
export default InputBox;
