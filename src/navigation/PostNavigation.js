import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator();

export const PostNavigation = () => {
  return (
    <PostNavigator.Navigator
      initialRouteName="BottomNavigation"
      screenOptions={defaultOptions}
    >
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={mainScreenOptions}
      />
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={postScreenOptions}
      />
    </PostNavigator.Navigator>
  );
};

const defaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontFamily: "nunito-bold"
  }
};

const postScreenOptions = ({ route }) => {
  const date = route.params.date;
  const booked = route.params.booked;

  return {
    title: date,
    headerStyle: {
      backgroundColor: "#faac1b"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "nunito-bold"
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="star"
          iconName={booked ? "star" : "staro"}
          onPress={() => console.log("hui")}
        />
      </HeaderButtons>
    )
  };
};

const mainScreenOptions = () => {
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
