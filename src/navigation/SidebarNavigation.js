import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomNavigation } from "./BottomNavigation";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

const Sidebar = createDrawerNavigator();

export const SidebarNavigation = () => {
  return (
    <Sidebar.Navigator>
      <Sidebar.Screen name="BottomNavigation" component={BottomNavigation} />
      <Sidebar.Screen name="AboutScreen" component={AboutScreen} />
      <Sidebar.Screen name="CreateScreen" component={CreateScreen} />
    </Sidebar.Navigator>
  );
};
