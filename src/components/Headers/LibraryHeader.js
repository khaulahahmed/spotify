import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextComponent from '../Text/TextComponent';
import Metrics from '../../theme/Metrics';

function LibraryHeader() {
  return (
    <View style={styles.heading}>
      <Image
        source={require('../../assets/icons/profile.png')}
        style={styles.profileIcon}
      />
      <TextComponent
        text={'Your Library'}
        type="ExtraBold"
        size={20}
        color="white"
      />
      <View style={styles.headerIcons}>
        <Image
          source={require('../../assets/icons/search_white.png')}
          style={styles.searchIcon}
        />
        <Image
          source={require('../../assets/icons/plus.png')}
          style={styles.plusIcon}
        />
      </View>
    </View>
  );
}

export default LibraryHeader;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    marginBottom: Metrics.scale(30),
  },

  profileIcon: {
    margin: Metrics.scale(8),
  },

  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: Metrics.scale(8),
  },
  searchIcon: {
    marginHorizontal: Metrics.scale(30),
    height: Metrics.scale(30),
    width: Metrics.scale(30),
  },
  plusIcon: {
    height: Metrics.scale(30),
    width: Metrics.scale(30),
  },
});
