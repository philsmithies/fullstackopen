import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../theme";
import StarsBar from "./StarsBar";

// id: "reduxjs.redux",
// fullName: "reduxjs/redux",
// description: "Predictable state container for JavaScript apps",
// language: "TypeScript",
// forksCount: 13902,
// stargazersCount: 52869,
// ratingAverage: 0,
// reviewCount: 0,
// ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    paddingVertical: 10,
  },
  heading: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
  },
  languageButton: {
    backgroundColor: theme.colors.primary,
    color: "white",
    flexGrow: 0,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
});

const Card = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>{item.fullName}</Text>
      <Text style={styles.subheading}>{item.description}</Text>
      <Text style={styles.languageButton}>{item.language}</Text>
      <StarsBar
        stargazersCount={item.stargazersCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
        forksCount={item.forksCount}
      />
    </View>
  );
};

export default Card;
