import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { HeaderButton } from "react-navigation-header-buttons";

export const AppHeaderIcon = props => (
  <HeaderButton {...props} IconComponent={AntDesign} iconSize={24} color='#fff'/>
);
