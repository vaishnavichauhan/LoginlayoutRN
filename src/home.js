import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const HomeScreen = () => (

  <View style={styles.container}>
    <ImageBackground source={require('../asset/p.webp')} style={styles.image}>

      <View style={styles.text}>
        <Text style={styles.fristtext}>HELLO</Text>
        <Text style={styles.secondtext}>Lorem ipsum dolor sit amet</Text>
      </View>

      <View style={styles.input}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#191970" }]}>
          <Text style={[styles.btntext, { color: "white" }]}> Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "white" }]}>
          <Text style={[styles.btntext, { color: "black" }]}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    display: 'flex',
    flex: 1
  },
  text: {
    flex: 2,
    paddingLeft: 20,
    paddingTop: 55,
  },
  fristtext: {
    fontSize: 50,
    fontWeight: "900",
    color: "#000000",
  },
  secondtext: {
    fontSize: 15,
    color: "#000000",
  },
  input: {
    flex: 1,
    margin: 25,
  },
  btn: {
    alignItems: "center",
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 15,
    padding: 15,
  },

  btntext: {
    fontSize: 16,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 15,
    width: 15,
  }
})

export default HomeScreen;
