import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MainScreen } from "../src/screens/MainScreen";
import { PostScreen } from "../src/screens/PostScreen";
import { THEME } from "./theme";
import { AppHeaderIcon } from "./components/AppHeaderIcon";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={defaultOptions}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={mainScreenOptions}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={postScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
