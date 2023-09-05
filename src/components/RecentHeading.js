import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextComponent from './Text/TextComponent';
import Metrics from '../theme/Metrics';

function RecentHeading() {
  return (
    <View style={styles.subheadingContainer}>
      <Image
        source={require('../assets/icons/recents.png')}
        style={styles.recentsIcon}
      />
      <TextComponent
        text={'Recents'}
        type="ExtraBold"
        size={10}
        color="white"
      />
      <View style={styles.thumbnail}>
        <Image
          source={require('../assets/icons/thumbnail.png')}
          style={styles.thumbnailIcon}
        />
      </View>
    </View>
  );
}

export default RecentHeading;

const styles = StyleSheet.create({
  subheadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.scale(25),
  },
  recentsIcon: {
    width: Metrics.scale(17),
    height: Metrics.scale(15),
    marginHorizontal: Metrics.scale(10),
  },
  thumbnail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: Metrics.scale(4),
  },
  thumbnailIcon: {
    width: Metrics.scale(20),
    height: Metrics.scale(20),
    // marginVertical: Metrics.scale(10),
  },
});
