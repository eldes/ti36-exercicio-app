import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from './src/screens/Chat';
import HomeScreen from './src/screens/Home';
import LikeScreen from './src/screens/Like';
import RatingScreen from './src/screens/Rating';
import TaskListScreen from './src/screens/TaskList';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' useLegacyImplementation>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Like" component={LikeScreen} />
          <Drawer.Screen name="Chat" component={ChatScreen} />
          <Drawer.Screen name="Rating" component={RatingScreen} />
          <Drawer.Screen name="TaskList" component={TaskListScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export type StackParams = {
  Home: undefined;
  Like: undefined;
  Chat: undefined;
  Rating: undefined;
  TaskList: undefined;
  Cadastro: undefined;
};
