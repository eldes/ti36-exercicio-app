import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Stack, Text, TextInput } from '@react-native-material/core';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

const StorageScreen: React.FC = function () {

  const [text, setText] = useState('');

  useFocusEffect(useCallback(function() {
    AsyncStorage.getItem('TEXT')
    .then(text => setText(text ?? ''));
  }, []));
  
  const textButtonPressed = function () {
    try {
      AsyncStorage.setItem(
        'TEXT',
        text
      );
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <Stack m={8} spacing={8}>
      <Text variant="h4">Salva um texto localmente</Text>
      <TextInput
        label='Texto'
        onChangeText={setText}
        value={text}
      />
      <Button title='Salvar' variant='text' onPress={textButtonPressed} />
    </Stack>
  );
};


export default StorageScreen;