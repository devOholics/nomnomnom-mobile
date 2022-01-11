import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "./components/SwipeCards";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.content}>
          What's up Woo-Sik, let's build this thing!!!!
        </Text>

        <SwipeCards />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});
