import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#99FF99',
  },

  messages: {
    flexGrow: 1,
  },

  message: {
    backgroundColor: '#ccffcc',
    border: '1px solid #66cc66',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    margin: 8,
    marginStart: 48,
    alignSelf: 'flex-end',
  },

  form: {
    backgroundColor: '#090',
    flexDirection: 'row',
    padding: 8,
  },

  textInput: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },

  sendButton: {
    marginStart: 16,
    borderRadius: 16,
    width: 32,
    height: 32,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;