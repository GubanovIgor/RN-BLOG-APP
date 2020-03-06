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

import { THEME } from "../theme";
import { DATA } from "../../assets/data";

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
