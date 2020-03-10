import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const AboutScreen = () => {
  return (
    <View>
      <Text>about</Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "О приложении",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="bars"
          iconName="bars"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};
