import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComponent from '../components/Text/TextComponent';
import {Recommendations} from '../data/Recommendations';

const AlbumScreens = ({route}) => {
  const itemId = route.params.itemId;
  const itemDetails = Recommendations.find(item => item.id === itemId);

  return (
    <View style={styles.rootContainer}>
      <TextComponent text={itemDetails.title} type="Bold" color="white" />
    </View>
  );
};

export default AlbumScreens;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 30,
  },
});
