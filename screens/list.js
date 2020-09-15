import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Source extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }
  componentDidMount() {
    fetch("https://hangry-backend.herokuapp.com/")
      .then((res) => res.json())
      .then((restaurants) =>
        this.setState({ restaurants }, () => {
          //console.log("restaurants fetched...", restaurants);
        })
      );
  }
  render() {
    return this.state.restaurants.map((restaurant, i) => {
      return (
        <Text key={i}>
          {restaurant.name}, {restaurant.address}, {restaurant.phone}
        </Text>
      );
    });
  }
}

export default Source;