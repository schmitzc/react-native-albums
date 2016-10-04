import React from 'react';
import { View, Image, Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  thumbnail: {
    height: 50,
    width: 50,
  },

  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headerText: {
    fontSize: 18,
  },

  image: {
    flex: 1,
    height: 300,
    width: null,
  },
};

export default AlbumDetail;
