import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SwipeCards from "./components/SwipeCards";

const background = {
  uri: "./assets/nom-nom-nom-color.jpg",
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.content}>
            What's up Woo-Sik, let's build this thing!!!!
          </Text>

          <SwipeCards />
          <StatusBar style="auto" />
        </ImageBackground>
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
