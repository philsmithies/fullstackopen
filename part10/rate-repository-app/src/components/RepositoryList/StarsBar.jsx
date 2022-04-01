import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  flexItem: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});

const StarsBar = ({
  stargazersCount,
  reviewCount,
  ratingAverage,
  forksCount,
}) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Text>
          {stargazersCount > 1000
            ? (stargazersCount / 1000).toFixed(1) + "k"
            : stargazersCount}
        </Text>
        <Text style={styles.text}>Stars</Text>
      </View>
      <View style={styles.flexItem}>
        <Text>
          {forksCount > 1000
            ? (forksCount / 1000).toFixed(1) + "k"
            : forksCount}
        </Text>
        <Text style={{ color: "black" }}>Forks</Text>
      </View>
      <View style={styles.flexItem}>
        <Text>{reviewCount}</Text>
        <Text style={styles.text}>Reviews</Text>
      </View>
      <View style={styles.flexItem}>
        <Text>{ratingAverage}</Text>
        <Text style={styles.text}>Rating</Text>
      </View>
    </View>
  );
};

export default StarsBar;
