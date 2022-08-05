import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: 'center',
  },

  post: {
    margin: 16,
    width: 117,
    border: '1px solid #ccc',
    padding: 8,
  },

  postImage: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

  postLikeButton: {
    paddingVertical: 8,
  },
});

export default styles;