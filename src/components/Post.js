import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <ImageBackground source={{ uri: post.img }} style={styles.image}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    width: "100%",
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  },
  title: {
    fontFamily: "nunito-bold",
    color: "#fff"
  }
});
