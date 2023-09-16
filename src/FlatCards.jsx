import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <>
      <Text style={styles.title}>FlatCards</Text>
      <View style={styles.container}>
        <View style={styles.red}>
          <Text>Red</Text>
        </View>
        <View style={styles.blue}>
          <Text>Blue</Text>
        </View>
        <View style={styles.green}>
          <Text>Green</Text>
        </View>
        {/* <View style={styles.yellow}>
        <Text>yellow</Text>
      </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    gap: 10,
    // alignContent: "center",
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  blue: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  green: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  yellow: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
