import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { THEME } from "../theme";

export const TabBarIcon = props => {
  return (
    <AntDesign
      name={props.name}
      size={32}
      color={props.focused ? '#fff' : THEME.DARK_MAIN_COLOR}
      style={{ marginBottom: -3 }}
    />
  );
};
