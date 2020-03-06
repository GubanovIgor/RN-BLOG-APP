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

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen}/>
      <Tab.Screen name="Book" component={BookScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigation" screenOptions={defaultOptions}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={mainScreenOptions}/>
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={postScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    title: 'Лента',
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
