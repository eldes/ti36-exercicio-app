import { AppBar, IconButton } from '@react-native-material/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthContext from '../contexts/Auth';
import ChatScreen from '../screens/Chat';
import HomeScreen from '../screens/Home';
import LikeScreen from '../screens/Like';
import RatingScreen from '../screens/Rating';
import StorageScreen from '../screens/Storage';
import TaskListScreen from '../screens/TaskList';

const AppStack = createDrawerNavigator();

const AppRoutes: React.FC = function () {

  const {logout} = useContext(AuthContext);
  
  return (
    <AppStack.Navigator initialRouteName='Home'
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
          trailing={ trailingProps => (
            <IconButton
              icon={ props => <Icon name='logout' {...props} />}
              {...trailingProps}
              onPress={ () => {
                logout()
              }}
            />
          )

          }
        />
      )
    }}>
      <AppStack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
      <AppStack.Screen name="Like" component={LikeScreen} options={{title: 'Like'}} />
      <AppStack.Screen name="Chat" component={ChatScreen} options={{title: 'Chat'}} />
      <AppStack.Screen name="Rating" component={RatingScreen} options={{title: 'Rating'}} />
      <AppStack.Screen name="TaskList" component={TaskListScreen} options={{title: 'Task List'}} />
      <AppStack.Screen name="Storage" component={StorageScreen} options={{title: 'Storage'}} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;