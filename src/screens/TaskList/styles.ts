import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#eee',
  },

  list: {
    flexGrow: 1,
  },

  form: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#fff',
    flexGrow: 1,
    height: 16,
    margin: 8,
  },

  button: {
    backgroundColor: '#000',
    width: 16,
    height: 16,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;