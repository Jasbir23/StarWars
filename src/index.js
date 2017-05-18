import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainList from "./MainList.js";
import { StackNavigator } from "react-navigation";
export default (StackNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  MainList: { screen: MainList }
}));
