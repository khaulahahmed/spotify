import React from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import Metrics from '../../theme/Metrics';
import {COLORS} from '../../theme/Colors';
import TextComponent from '../Text/TextComponent';
import {premiumListData} from '../../data/PremiumVerticalListData';

const PremiumVerticalList = () => {
  const renderPremiumList = ({item}) => {
    // console.log(item);
    return (
      <ImageBackground
        source={item.imageSource}
        style={{
          height: Metrics.scale(230),
          borderRadius: 10,
          margin: Metrics.scale(10),
        }}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.tile}>
          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <TextComponent
                text={item.tag}
                type="ExtraBold"
                size={10}
                color="black"
              />
            </View>
          </View>
          <View style={styles.tileHeading}>
            <Text style={styles.tileText}>
              <TextComponent
                text={`${item.title} \n`}
                type="ExtraBold"
                size={18}
                color="white"
              />
              <TextComponent
                text={item.text}
                type="SemiBold"
                size={12}
                color="white"
              />
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <FlatList
      data={premiumListData}
      renderItem={renderPremiumList}
      keyExtractor={item => item.id}
      contentContainerStyle={{marginBottom: Metrics.scale(50)}}
      bounces={false}
    />
  );
};

export default PremiumVerticalList;

const styles = StyleSheet.create({
  tile: {
    borderRadius: Metrics.scale(14),
    height: Metrics.scale(230),
    paddingHorizontal: Metrics.scale(20),
    marginBottom: Metrics.scale(10),
  },
  tagRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: Metrics.scale(25),
    height: Metrics.scale(25),
  },
  tag: {
    backgroundColor: COLORS.GREY,
    padding: Metrics.scale(3),
    height: Metrics.scale(25),
    opacity: 0.8,
  },
  tileHeading: {
    flex: 5,
    flexDirection: 'column',
  },
  tileText: {
    flex: 1,
    textAlign: 'center',
    margin: Metrics.scale(10),
    marginBottom: Metrics.scale(10),
  },
});
