import { render, fireEvent } from "react-native-testing-library";
import React, { Component } from "react";
import LoginPage from "./index";

describe("test for login component", () => {
  it("test for login ", () => {
    const { getByPlaceholder } = render(<LoginPage />);
    const user = getByPlaceholder("Username");
    const pwd = getByPlaceholder("Password");
    fireEvent.changeText(user, "vamsi");
    fireEvent.changeText(pwd, "vamsi");
  });
});
