import { useState } from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fotoImage from '../../../assets/like/foto.jpg';
import styles from './styles';

type Props = {
};

const LikeScreen: React.FC<Props> = function (props) {
  const [liked, setLiked] = useState(false);

  let firstPressTime = new Date().getTime();

  const imagePressed = function () {
    const secondPressTime = new Date().getTime();
    console.log(secondPressTime - firstPressTime);
    
    if ((secondPressTime - firstPressTime) <= 200) {
      setLiked(!liked);
    }
    firstPressTime = secondPressTime;
  };

  const likeButtonPressed = function () {
    setLiked(!liked);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.post}>
        <Pressable onPress={imagePressed}>
          <Image style={styles.postImage} source={fotoImage} />
        </Pressable>
        <TouchableOpacity style={styles.postLikeButton} onPress={likeButtonPressed}>
          {(liked) ? (
            <Icon name="favorite" size={24} color="#999" />
          ) : (
            <Icon name="favorite-outline" size={24} color="#999" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LikeScreen;