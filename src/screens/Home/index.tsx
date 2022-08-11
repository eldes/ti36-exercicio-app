import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { StackParams } from '../../../App';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'Home'>;

type ButtonData = {
  text: string;
  to: keyof StackParams;
};

const buttonDataList: ButtonData[] = [
  {
    text: 'Like',
    to: 'Like',
  },
  {
    text: 'Chat',
    to: 'Chat',
  },
  {
    text: 'Rating',
    to: 'Rating',
  },
  {
    text: 'TaskList',
    to: 'TaskList',
  },
];

const HomeScreen: React.FC<Props> = function (props) {

  return (
    <View style={styles.home}>
      {buttonDataList.map( (buttonData, index) =>
        <Pressable key={index} onPress={() => props.navigation.navigate(buttonData.to)}>  
          <Text style={styles.button}>{buttonData.text}</Text>
        </Pressable>  
      )}
    </View>
  );
};

export default HomeScreen;