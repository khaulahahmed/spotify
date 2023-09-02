import React from 'react';
import {COLORS} from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';
import {StyleSheet, View} from 'react-native';

function PremiumCard() {
  return (
    <View style={styles.container}>
      <TextComponent
        text={'Spotify Free'}
        type="ExtraBold"
        size={17}
        color="white"
      />
      <TextComponent
        text={'CURRENT PLAN'}
        type="SemiBold"
        size={14}
        color="white"
      />
    </View>
  );
}

export default PremiumCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.DARKER_GREY,
    borderRadius: Metrics.scale(14),
    height: Metrics.scale(80),
    paddingHorizontal: Metrics.scale(20),
    alignItems: 'center',
    marginVertical: Metrics.scale(20),
  },
});
