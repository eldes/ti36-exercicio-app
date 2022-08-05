import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import LikeScreen from './src/screens/Like';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Like" component={LikeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type StackParams = {
  Home: undefined;
  Like: undefined;
  Cadastro: undefined;
};
