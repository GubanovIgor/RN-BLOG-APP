import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { THEME } from "../theme";

export const TabBarIcon = props => {
  return (
    <AntDesign
      name={props.name}
      size={32}
      color={props.focused ? THEME.MAIN_COLOR : "black"}
      style={{ marginBottom: -3 }}
    />
  );
};
