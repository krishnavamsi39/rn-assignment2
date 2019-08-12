import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { Actions } from "react-native-router-flux";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleLogin = () => {
    if (this.state.username === "Vamsi" && this.state.password === "Vamsi")
      Actions.todoapp();
  };
  render() {
    return (
      <View>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={"Username"}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={"Password"}
        />

        <Button title={"Login"} onPress={this.handleLogin} />
      </View>
    );
  }
}
export default LoginPage;
