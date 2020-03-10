import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomNavigation } from "./BottomNavigation";
import { AboutNavigation } from "./AboutNavigation";
import { CreateNavigation } from "./CreateNavigation";

const Sidebar = createDrawerNavigator();

export const SidebarNavigation = () => {
  return (
    <Sidebar.Navigator>
      <Sidebar.Screen name="BottomNavigation" component={BottomNavigation} />
      <Sidebar.Screen name="AboutScreen" component={AboutNavigation} />
      <Sidebar.Screen name="CreateScreen" component={CreateNavigation} />
    </Sidebar.Navigator>
  );
};
