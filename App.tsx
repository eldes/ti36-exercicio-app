import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './src/screens/Chat';
import HomeScreen from './src/screens/Home';
import LikeScreen from './src/screens/Like';
import RatingScreen from './src/screens/Rating';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Like" component={LikeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type StackParams = {
  Home: undefined;
  Like: undefined;
  Chat: undefined;
  Rating: undefined;
  Cadastro: undefined;
};
