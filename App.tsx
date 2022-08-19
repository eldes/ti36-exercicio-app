import { AppBar, Button, IconButton } from '@react-native-material/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatScreen from './src/screens/Chat';
import HomeScreen from './src/screens/Home';
import LikeScreen from './src/screens/Like';
import RatingScreen from './src/screens/Rating';
import StorageScreen from './src/screens/Storage';
import TaskListScreen from './src/screens/TaskList';

export default function App() {
  const Drawer = createDrawerNavigator();
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          useLegacyImplementation
          screenOptions={{
            header: (headerProps) => (
              <AppBar
                title={headerProps.options.title}
                leading={ leadingProps => (
                  <IconButton
                    icon={ props =>
                      <Icon name="menu" {...props} />
                    } {...leadingProps}
                      onPress={ () => {
                        headerProps.navigation.toggleDrawer()
                      }
                    }
                  />
                )}
              />
            )
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
          <Drawer.Screen name="Like" component={LikeScreen} options={{title: 'Like'}} />
          <Drawer.Screen name="Chat" component={ChatScreen} options={{title: 'Chat'}} />
          <Drawer.Screen name="Rating" component={RatingScreen} options={{title: 'Rating'}} />
          <Drawer.Screen name="TaskList" component={TaskListScreen} options={{title: 'Task List'}} />
          <Drawer.Screen name="Storage" component={StorageScreen} options={{title: 'Storage'}} />
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
  Storage: undefined;
};
