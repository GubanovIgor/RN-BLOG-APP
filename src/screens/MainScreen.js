import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Post } from "../components/Post";
import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({ navigation }) => {
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

MainScreen.navigationOptions = () => {
  return {
    title: "Лента",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="stepforward"
          iconName="camera"
          onPress={() => console.log("hui")}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="bars" iconName="bars" onPress={() => console.log("hui")} />
      </HeaderButtons>
    )
  };
};
