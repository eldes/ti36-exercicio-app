import React, { useState } from 'react';
import { FlatList, Image, ListRenderItem, ScrollView, TouchableOpacity, View } from 'react-native';
import RatingPanel from './RatingPanel';
import styles from './styles';

type Photo = {
  id: number;
  uri: string;
  rating: number;
};

const RatingScreen: React.FC = function () {

  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 0,
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      rating: 0,
    },
    {
      id: 1,
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      rating: 1,
    },
    {
      id: 2,
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      rating: 2,
    },
    {
      id: 3,
      uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      rating: 3,
    },
  ]);

  const renderItem: ListRenderItem<Photo> = function ({item}) {
    return (
      <View style={styles.photo}>
        <Image style={styles.photoImage} source={{uri: item.uri}} />
        <RatingPanel rating={item.rating} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <FlatList style={styles.photos} data={photos} renderItem={renderItem} />
    </ScrollView>
  );
};


export default RatingScreen;