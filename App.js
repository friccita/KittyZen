import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const appTitle = "KittyZen";
  const welcomeBanner =
    "Welcome to KittyZen! Here, you can find inspirational quotations coupled with cat images. We claim no responsibility for the compatibility of said items. Have a good day!";
  const placeHolderQuote = "An owl is a cat with wings.";
  const placeHolderAuthor = "Yours Truly";
  const placeHolderImg =
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Great_Horned_Owl.jpg";

  const [quote, setQuote] = useState(placeHolderQuote);
  const [author, setAuthor] = useState(placeHolderAuthor);
  const [image, setImage] = useState(placeHolderImg);

  const getQuote = () => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
        if (data[0].a === "zenquotes.io") {
          Alert.alert("Free quote limit exceeded. Please wait 1 minute.");
        }
      });
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setImage(data[0].url);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-around" }}>
        <Text style={styles.title}>{appTitle}</Text>
        <Text style={styles.welcomeText}>{welcomeBanner}</Text>

        <StatusBar style="auto" />
      </View>

      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>"{quote}"</Text>
        <Text style={styles.authorText}>- {author}</Text>
        <Button title="Click Me" onPress={getQuote}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#8fbc8f",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  title: {
    color: "#2f4f4f",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    fontFamily: "Zapfino",
  },
  welcomeText: {
    color: "#000000",
    fontStyle: "italic",
    textAlign: "left",
    justifyContent: "center",
  },
  quoteText: {
    color: "#000000",
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
  },
  authorText: {
    fontStyle: "italic",
    color: "#000000",
    textAlign: "right",
  },
  quoteBox: {
    height: 100,
    alignSelf: "stretch",
    backgroundColor: "#c0c0c0",
    justifyContent: "space-around",
  },
  image: {
    width: 500,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    resizeMode: "contain",
  },
});
