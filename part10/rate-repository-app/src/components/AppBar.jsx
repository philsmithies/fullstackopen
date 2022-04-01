import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    // ...
  },
  title: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.title}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
