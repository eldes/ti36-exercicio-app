import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Task from '../Task';
import styles from './styles';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = function (props) {
  const [checked, setChecked] = useState(props.task.checked);
  const pressed = function () {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.root} onPress={pressed}>
      <View style={styles.checkBox}>
        {(checked) && (
          <Icon name='check' />
        )}
      </View>
      <Text>{props.task.text}</Text>
    </TouchableOpacity>
  );
};


export default TaskItem;