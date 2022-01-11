import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Simple from "./Simple";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        What's up Woo-Sik, let's build this thing!!!!
      </Text>
      <Simple />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});
