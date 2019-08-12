import React, { Component } from "react";
import { Text, FlatList, View, Button, StyleSheet } from "react-native";

class Names extends Component {
  render() {
    return (
      <View style={{ flex: 2, alignItems: "center" }}>
        <FlatList
          data={[
            { key: "Steve Rogers" },
            { key: "Tony Stark" },
            { key: "Dr Strange" }
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

export default Names;
