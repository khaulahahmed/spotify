import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import TextComponent from '../Text/TextComponent';
import Metrics from '../../theme/Metrics';

const HorizontalList = ({data}) => {
  renderRecommendedItems = ({item}) => (
    <View style={styles.dataBox}>
      <Image source={item.imageSource} style={styles.dataImage} />
      <View>
        <TextComponent
          text={item.title}
          type="Bold"
          size={Metrics.scale(15)}
          color="white"
        />
        <View style={{flexDirection: 'row'}}>
          <TextComponent
            text={item.genre}
            type="Regular"
            size={Metrics.scale(12)}
          />
          <TextComponent text={'.'} type="ExtraBold" size={Metrics.scale(12)} />

          <TextComponent
            text={item.singer}
            type="Regular"
            size={Metrics.scale(12)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.dataContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderRecommendedItems}
        horizontal={true}
        contentContainerStyle={styles.dataContainer}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  dataContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // marginVertical: Metrics.scale(10),
    // paddingBottom: Metrics.scale(60),
  },

  dataImage: {
    height: Metrics.scale(150),
    width: Metrics.scale(150),
  },
  dataBox: {
    margin: Metrics.scale(10),
  },
});
