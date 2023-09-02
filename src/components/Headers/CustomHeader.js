import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors';
import {Text} from '@react-native-material/core';
import TextComponent from '../Text/TextComponent';
import {View, StyleSheet} from 'react-native';
import Metrics from '../../theme/Metrics';

export const CustomHeader = () => (
  <View style={styles.headerContainer}>
    <LinearGradient
      colors={[COLORS.LIGHT_PURPLE, COLORS.PURPLE]}
      style={{flex: 1}}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      <View style={styles.textStyle}>
        <TextComponent
          text={'3 months of Premium for free'}
          type="ExtraBold"
          size={14}
          color="white"
        />
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    flexDirection: 'column',
    height: Metrics.scale(70),
    borderTopLeftRadius: Metrics.scale(20),
    borderTopRightRadius: Metrics.scale(20),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
