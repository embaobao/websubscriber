import React from 'react';
import { View, Text } from 'react-desktop/macOs';
import defaultWallpaper from '../../assets/ wallpaper/def.png';

export default props => {
  const { title, children } = props;
  return (
    <View
      background={` #000 url(${defaultWallpaper}) no-repeat center `}
      padding="20px"
      horizontalAlignment="center"
      verticalAlignment="center"
      width="100%"
      height="100%"
      {...props}
    >
      {children}
    </View>
  );
};
