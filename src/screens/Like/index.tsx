import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import fotoImage from '../../../assets/like/foto.jpg';
import styles from './styles';

type Props = {
};

const LikeScreen: React.FC<Props> = function (props) {
  return (
    <View style={styles.screen}>
      <View style={styles.post}>
        <Image style={styles.postImage} source={fotoImage} />
        <TouchableOpacity style={styles.postLikeButton}>
          Like
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LikeScreen;