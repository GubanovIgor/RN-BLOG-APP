import * as Font from 'expo-font'

export async function bootstrap() {
  await Font.loadAsync({
    'nunito-regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
  });
}