import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Metrics from '../theme/Metrics';
import TextComponent from '../components/Text/TextComponent';
import {AppBar} from '@react-native-material/core';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../components/Headers/CustomHeader';
import {COLORS} from '../theme/Colors';
import {premiumList} from '../data/PremiumList';
import PremiumHorizontalList from '../components/List/PremiumHorizontalList';
import PremiumCard from '../components/Cards/PremiumCard';
import PremiumVerticalList from '../components/List/PremiumVerticalList';

const PremiumScreen = () => {
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <CustomHeader />
        <PremiumHorizontalList />
        <Text style={styles.textStyle}>
          <TextComponent
            text={
              "You can't upgrade to Premium in the app. \nWe know, it's not ideal"
            }
            type="SemiBold"
            size={14}
            color="white"
          />
        </Text>
        <PremiumCard />

        <PremiumVerticalList />
      </ScrollView>
    </>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: Metrics.scale(20),
    // paddingVertical: Metrics.scale(50),
  },
  textStyle: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    margin: Metrics.scale(10),
  },
});
