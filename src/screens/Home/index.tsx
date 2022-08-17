import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '@react-native-material/core';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { StackParams } from '../../../App';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = function (props) {

  const [text, setText] = useState('');

  useFocusEffect(useCallback(function() {
    AsyncStorage.getItem('TEXT')
    .then(text => setText(text ?? ''));
  }, []));

  return (
    <View style={styles.home}>
      <Text variant='h4'>Valor gravado:</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default HomeScreen;