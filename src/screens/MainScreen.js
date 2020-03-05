import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Post } from "../components/Post";
import { DATA } from "../../assets/data";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString()
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Post post={item} onOpen={() => openPostHandler(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {}
});
