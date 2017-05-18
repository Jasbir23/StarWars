import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity, Dimensions } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("./starWars.gif")}
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width
          }}
        >
          <View
            style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("./starWarsLogo.png")}
              style={{ height: 200, width: 400 }}
            />
          </View>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              style={{
                width: 300,
                height: 60,
                backgroundColor: "rgb(211, 225, 226)",
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("MainList")}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Get Species
              </Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}
