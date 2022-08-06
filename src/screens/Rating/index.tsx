import React, { useState } from 'react';
import { FlatList, Image, ListRenderItem, Text, View } from 'react-native';
import styles from './styles';

type Photo = {
  uri: string;
};

const RatingScreen: React.FC = function () {

  const [photos, setPhotos] = useState<Photo[]>([
    {
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
    {
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
    {
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
    {
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
  ]);

  const renderItem: ListRenderItem<Photo> = function ({item}) {
    return (
      <View style={styles.photo}>
        <Image style={styles.photoImage} source={{uri: item.uri}} width={100} height={100} />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList style={styles.photos} data={photos} renderItem={renderItem} />
    </View>
  );
};


export default RatingScreen;