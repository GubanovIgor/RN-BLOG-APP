import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.empty}>
        <Entypo name="images" size={64} style={styles.logo}/>
        <Text style={styles.noPhotoText}>Постов пока нет</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onOpen={() => onOpen(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 5
  },
  logo: {
    color: '#c9c9c9',
    marginBottom: 15
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noPhotoText: {
    color: '#adadad',
  }
});
