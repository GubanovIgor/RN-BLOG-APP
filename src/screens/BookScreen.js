import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Post } from "../components/Post";
import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const BookScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
      booked: post.booked
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          if (item.booked) {
            return <Post post={item} onOpen={() => openPostHandler(item)} />;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {}
});

BookScreen.navigationOptions = () => {
  return {
    title: "Лента",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="bars" iconName="bars" onPress={() => console.log("hui")} />
      </HeaderButtons>
    )
  };
};
