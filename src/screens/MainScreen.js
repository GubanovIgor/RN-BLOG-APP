import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
      booked: post.booked
    });
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const data = useSelector(state => state.post.allPosts)

  return <PostList data={data} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => {
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
        <Item
          title="bars"
          iconName="bars"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};
