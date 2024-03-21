import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Bus from "../assets/bus.png";

const WelcomePage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={Bus} style={styles.image} resizeMode="cover">
        <Text style={styles.title}>Update Bus Status</Text>
        <Text style={styles.welcome}>
          Not available due to following reason
        </Text>
        <TouchableOpacity
          style={styles.buttonMain}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.main}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Update Bus status</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Go Offline</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 30,
  },
  buttonMain: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    gap: 15,
    flexDirection: "column",
  },
});

export default WelcomePage;
