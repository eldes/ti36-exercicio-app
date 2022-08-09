import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
    rating: number;
};

const RatingPanel: React.FC<Props> = function (props) {
    const [rating, setRating] = useState(props.rating);

    const pressed = function (index: number) {
        if (index === rating) {
            setRating(0);
        } else {
            setRating(index);
        }
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.star} onPress={() => pressed(1)}>
                {(rating > 0) ? (
                    <Icon name='star' />
                ) : (
                    <Icon name='star-outline' />
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={() => pressed(2)}>
                {(rating > 1) ? (
                    <Icon name='star' />
                ) : (
                    <Icon name='star-outline' />
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={() => pressed(3)}>
                {(rating > 2) ? (
                    <Icon name='star' />
                ) : (
                    <Icon name='star-outline' />
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={() => pressed(4)}>
                {(rating > 3) ? (
                    <Icon name='star' />
                ) : (
                    <Icon name='star-outline' />
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={() => pressed(5)}>
                {(rating > 4) ? (
                    <Icon name='star' />
                ) : (
                    <Icon name='star-outline' />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default RatingPanel;
