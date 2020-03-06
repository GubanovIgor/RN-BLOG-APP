import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BookScreen } from "../screens/BookScreen";
import { MainScreen } from "../screens/MainScreen";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
    </Tab.Navigator>
  );
};
