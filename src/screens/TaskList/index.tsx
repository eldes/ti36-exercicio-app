import { useState } from 'react';
import { FlatList, ListRenderItem, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Task from './Task';
import TaskItem from './TaskItem';

const getNextId = 0;

const TaskListScreen = function () {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState('');
  let nextId = 0;

  const renderItem: ListRenderItem<Task> = function ({item: task}) {
    return (
      <TaskItem task={task} />
    );
  };

  const addButtonPressed = function () {
    tasks.push({
      id: nextId++,
      text,
      checked: false
    });
    setTasks(tasks);
    setText('');
  };

  return (
    <View style={styles.screen}>
      <FlatList style={styles.list} data={tasks} renderItem={renderItem} />
      <View style={styles.form}>
        <TextInput style={styles.input} onChangeText={setText} value={text}/>
        <TouchableOpacity style={styles.button} onPress={addButtonPressed}>
          <Icon name='add' color='#fff' size={16} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};


export default TaskListScreen;