import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../src/screens/MainScreen";
import { PostScreen } from "../src/screens/PostScreen";
import { THEME } from "./theme";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Post" component={PostScreen} options={postOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontFamily: "nunito-bold"
  }
};

const postOptions = {
  headerStyle: {
    backgroundColor: '#faac1b'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: "nunito-bold"
  }
}
