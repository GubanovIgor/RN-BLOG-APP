import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { PostScreen } from "../screens/PostScreen";
import { BookScreen } from "../screens/BookScreen";
import { THEME } from "../theme";

const BookNavigator = createStackNavigator();

export const BookNavigation = () => {
  return (
    <BookNavigator.Navigator
      initialRouteName="BottomNavigation"
      screenOptions={defaultOptions}
    >
      <BookNavigator.Screen
        name="Book"
        component={BookScreen}
        options={BookScreen.navigationOptions}
      />
      <BookNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </BookNavigator.Navigator>
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
