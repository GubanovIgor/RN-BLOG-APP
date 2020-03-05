import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Post } from "../components/Post";
import { DATA } from "../../assets/data";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {}
});
