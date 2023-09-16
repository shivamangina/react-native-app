import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <>
      <Text style={styles.title}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.yellow]}>
        <Text>yellow</Text>
      </View>
      </ScrollView>
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
    // justifyContent: "space-around",
    // alignItems: "center",
    padding: 10,
    gap: 10,
    // alignContent: "center",
  },
  card: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    dropShadow: 3,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
  green: {
    backgroundColor: "green",
  },
  yellow: {
    backgroundColor: "yellow",
  },
});
