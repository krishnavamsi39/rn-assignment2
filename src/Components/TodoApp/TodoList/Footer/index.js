import React, { Component } from "react";
import { BottomNavigation } from "react-native-material-ui";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "today" };
  }
  handleAll = () => {
    this.props.changeAll();
  };
  handleActive = () => {
    this.props.changeActive();
  };
  handleCompleted = () => {
    this.props.changeCompleted();
  };
  render() {
    return (
      <>
        <BottomNavigation active={this.props.active} hidden={false}>
          <BottomNavigation.Action
            key="all"
            icon="format-list-bulleted"
            label="All"
            onPress={this.handleAll}
          />
          <BottomNavigation.Action
            key="active"
            icon="lock-open"
            label="Active"
            onPress={this.handleActive}
          />
          <BottomNavigation.Action
            key="completed"
            icon="check-circle"
            label="Completed"
            onPress={this.handleCompleted}
          />
        </BottomNavigation>
      </>
    );
  }
}
export default Footer;
