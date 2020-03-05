import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const MainScreen = ({navigation}) => {
  const goPost = () => {
    console.log(navigation)
    navigation.navigate('Post')
  }

  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button title='go Post' onPress={goPost}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
