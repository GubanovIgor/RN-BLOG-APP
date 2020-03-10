import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
      booked: post.booked
    });
  };

  const data = DATA.filter(post => post.booked)

  return <PostList data={data} onOpen={openPostHandler}/>
};

BookScreen.navigationOptions = () => {
  return {
    title: "Избранное",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="bars" iconName="bars" onPress={() => console.log("hui")} />
      </HeaderButtons>
    )
  };
};
