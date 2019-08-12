import React, { Component } from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  Button,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isLoading: false };
  }
  handleLogin = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (this.state.username === "Vamsi" && this.state.password === "Vamsi") {
        Actions.todoapp();
      } else {
        Alert.alert("please try again");
      }
      this.setState({ isLoading: false });
    }, 2000);
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
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <></>
        )}
      </View>
    );
  }
}
export default LoginPage;
