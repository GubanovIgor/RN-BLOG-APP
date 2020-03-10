import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const CreateScreen = () => {
  return (
    <View>
      <Text>create</Text>
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Новый пост",
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
