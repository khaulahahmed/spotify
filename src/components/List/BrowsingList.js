import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {browsingData} from '../../data/BrowsingData';
import TextComponent from '../Text/TextComponent';
import Metrics from '../../theme/Metrics';

function BrowsingList() {
  renderBrowsingItems = ({item}) => (
    <View style={styles.box}>
      <ImageBackground source={item.imageSource} style={styles.images}>
        <View style={styles.imageText}>
          <TextComponent
            text={item.title}
            type="ExtraBold"
            size={18}
            color="white"
          />
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        data={browsingData}
        renderItem={renderBrowsingItems}
        keyExtractor={item => item.title}
        numColumns={2}
        bounces={false}
      />
    </View>
  );
}

export default BrowsingList;

const styles = StyleSheet.create({
  flatlistContainer: {
    marginTop: Metrics.scale(30),
    marginVertical: Metrics.scale(120),
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    margin: Metrics.scale(8),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: Metrics.scale(19),
  },
  images: {
    width: Metrics.scale(180),
    height: Metrics.scale(100),
    borderRadius: Metrics.scale(19),
  },
  imageText: {
    margin: Metrics.scale(10),
  },
});
