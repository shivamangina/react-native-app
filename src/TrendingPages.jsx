import { StyleSheet, Text, View, Image, TouchableOpacity,Linking } from "react-native";
import React from "react";

export default function TrendingPages() {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
  return (
    <>
      <Text style={styles.title}>Trending Places</Text>
      <View style={styles.container}>
        {/* Image */}
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ",
          }}
          style={styles.cardImage}
        />

        <View style={[styles.card, styles.red]}>
          <Text>Hawa Mahal</Text>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://blog.learncodeonline.in/whats-new-in-javascript-21-es12"
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
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
  socialLinks: {},
  container: {
    // height: 200,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
    padding: 10,
    // gap: 10,
    alignContent: "center",
  },
  card: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    // dropShadow: 3,
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
  },

  red: {
    // backgroundColor: "red",
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
