import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {browsingData} from '../../data/BrowsingData';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';

function BrowsingList() {
  const navigate = useNavigation();

  renderBrowsingItems = ({item}) => (
    <Pressable
      onPress={() => navigate.navigate('BrowseScreens', {itemId: item.id})}
      style={styles.box}>
      <ImageBackground
        source={item.imageSource}
        style={styles.images}
        imageStyle={{borderRadius: Metrics.scale(8)}}>
        <View style={styles.imageText}>
          <TextComponent
            text={item.title}
            type="ExtraBold"
            size={18}
            color="white"
          />
        </View>
      </ImageBackground>
    </Pressable>
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
