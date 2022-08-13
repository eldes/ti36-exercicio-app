import { AppBar, IconButton } from '@react-native-material/core';
import { createNavigationContainerRef, NavigationProp } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
};


const AppHeader: React.FC<Props> = function (props) {
  const navigationRef = createNavigationContainerRef()
  
  return (
    <AppBar
      title="Like"
      leading={props => (
        <IconButton icon={props => <Icon name="left" {...props} />} {...props} onPress={() => navigationRef.goBack() } />
      )}
    />
  );
};


export default AppHeader;