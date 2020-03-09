import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostNavigation } from "./PostNavigation";
import { BookNavigation } from "./BookNavigation";
import { THEME } from "../theme";
import { TabBarIcon } from "../components/TabBarIcon";

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator tabBarOptions={tabBarOptions}>
      <BottomNavigator.Screen
        name="PostNavigation"
        component={PostNavigation}
        options={bottomMainScreenOptions}
      />
      <BottomNavigator.Screen
        name="BookNavigation"
        component={BookNavigation}
        options={bottomBookScreenOptions}
      />
    </BottomNavigator.Navigator>
  );
};

const tabBarOptions = {
  activeTintColor: THEME.MAIN_COLOR,
  labelStyle: {
    fontSize: 0
  }
};

const bottomMainScreenOptions = () => {
  return {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
  };
};

const bottomBookScreenOptions = () => {
  return {
    activeTintColor: "red",
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="staro" />
  };
};
