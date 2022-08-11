import { AppBar, IconButton } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatScreen from './src/screens/Chat';
import HomeScreen from './src/screens/Home';
import LikeScreen from './src/screens/Like';
import RatingScreen from './src/screens/Rating';
import TaskListScreen from './src/screens/TaskList';

const Header: React.FC<NativeStackHeaderProps> = ({ route, back, navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <AppBar
      title={route.name}
      leading={
        back &&
        (props => (
          <IconButton
            icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
            onPress={navigation.goBack}
            {...props}
          />
        ))
      }
      style={{ paddingTop: insets.top }}
    />
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{header: Header}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Like" component={LikeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Rating" component={RatingScreen} />
          <Stack.Screen name="TaskList" component={TaskListScreen} />
        </Stack.Navigator>
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
