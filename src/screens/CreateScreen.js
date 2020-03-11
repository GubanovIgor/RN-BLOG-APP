import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ScrollView,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { addPost } from "../store/actions/post";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [postText, setPostText] = useState("");
  const img =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";

  const onChangeText = text => {
    setPostText(text);
  };

  const addPostHandler = () => {
    const post = {
      img,
      text: postText,
      date: new Date().toJSON(),
      booked: false
    };

    dispatch(addPost(post));
    navigation.navigate("Main")
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <TextInput
            style={styles.text}
            value={postText}
            onChangeText={text => onChangeText(text)}
            multiline
            placeholder="Введите текст поста"
          />
          <Image
            style={styles.image}
            source={{
              uri: img
            }}
          />
          <Button title="Создать" onPress={() => addPostHandler()} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 14,
    fontFamily: "nunito-regular"
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10
  }
});
