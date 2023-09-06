import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icons} from '../../assets/icons';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';

function LibraryHeader() {
  return (
    <View style={styles.heading}>
      <Image source={Icons?.profile} style={styles.profileIcon} />
      <TextComponent
        text={'Your Library'}
        type="ExtraBold"
        size={20}
        color="white"
      />
      <View style={styles.headerIcons}>
        <Image source={Icons?.search_white} style={styles.searchIcon} />
        <Image source={Icons.plus} style={styles.plusIcon} />
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
