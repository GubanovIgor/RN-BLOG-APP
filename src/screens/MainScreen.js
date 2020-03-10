import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
      booked: post.booked
    });
  };

  return <PostList data={DATA} onOpen={openPostHandler}/>
};

MainScreen.navigationOptions = ({navigation}) => {
  return {
    title: "Все посты",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="stepforward"
          iconName="camera"
          onPress={() => navigation.navigate("CreateScreen")}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="bars" iconName="bars" onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  };
};
