import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
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
        options={MainScreen.navigationOptions}
      />
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
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
