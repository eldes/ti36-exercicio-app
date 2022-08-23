import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';

const AuthStack = createNativeStackNavigator();

const AuthRouts: React.FC = function () {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRouts;