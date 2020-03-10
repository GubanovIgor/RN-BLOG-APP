import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} onOpen={() => onOpen(item)} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
  }
});
