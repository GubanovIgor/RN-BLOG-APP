import React, { useEffect, useCallback } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { THEME } from "../theme";
import { DATA } from "../../assets/data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { bookedPost } from "../store/actions/post";

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const postId = route.params.postId;
  const post = DATA.find(p => p.id === postId);

  const bookedToggle = useCallback(() => {
    dispatch(bookedPost(postId))
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({bookedToggle})
  }, [])

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы уверены?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" style={styles.button} onPress={removeHandler} />
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

PostScreen.navigationOptions = ({ route, navigation }) => {
  const date = route.params.date;
  const booked = route.params.booked;
  const bookedToggle = route.params.bookedToggle

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
          onPress={() => bookedToggle()}
        />
      </HeaderButtons>
    )
  };
};
