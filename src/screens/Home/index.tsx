import { Text } from '@react-native-material/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { View } from 'react-native';
import AuthContext from '../../contexts/Auth';
import { StackParams } from '../../routes/StackParams';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = function (props) {

  const {user} = useContext(AuthContext);

  return (
    <View style={styles.home}>
      <Text>Bem-vindo:</Text>
      <Text variant='h4'>{user?.name}</Text>
    </View>
  );
};

export default HomeScreen;