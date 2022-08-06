import { useState } from 'react';
import { FlatList, ListRenderItem, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type Message = {
  text: string;
};

type Props = {
};

const ChatScreen: React.FC<Props> = function (props) {

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');

  const renderItem: ListRenderItem<Message> = function({item}) {
    return (
      <View style={styles.message}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const sendButtonPressed = function () {
    messages.push({text});
    setMessages(messages);
    setText('');
  };

  return (
    <View style={styles.screen}>
      <FlatList style={styles.messages} data={messages} renderItem={renderItem} />
      <View style={styles.form}>
        <TextInput style={styles.textInput} onChangeText={setText} value={text} />
        <TouchableOpacity style={styles.sendButton} onPress={sendButtonPressed}>
          <Icon name="send" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ChatScreen;