import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { THEME } from "../theme";
import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ route }) => {
  const postId = route.params.postId;
  const post = DATA.find(p => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {text: 'Удалить', style: 'destructive', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" style={styles.button} onPress={removeHandler}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  button: {
    backgroundColor: THEME.DANGER_COLOR
  }
});

PostScreen.navigationOptions = ({ route }) => {
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
