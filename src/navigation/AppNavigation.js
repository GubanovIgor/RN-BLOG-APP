import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookScreen } from "../screens/BookScreen";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import TabBarIcon from "../components/TabBarIcon";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNavigation"
        screenOptions={defaultOptions}
      >
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
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

export const BottomNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={bottomMainScreenOptions}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={bottomBookScreenOptions}
      />
    </Tab.Navigator>
  );
};

// Styles and options
const defaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontFamily: "nunito-bold"
  }
};

const tabBarOptions = {
  activeTintColor: THEME.MAIN_COLOR,
  labelStyle: {
    fontSize: 0
  }
}

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

const bottomMainScreenOptions = () => {
  return {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name="home"
      />
    )
  };
};

const bottomBookScreenOptions = () => {
  return {
    activeTintColor: "red",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name="staro"
      />
    )
  };
};
