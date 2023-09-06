import {StyleSheet, View} from 'react-native';

import React from 'react';
import TextComponent from '../components/Text/TextComponent';
import {browsingData} from '../data/BrowsingData';

const BrowseScreens = ({route, navigation}) => {
  const itemId = route.params.itemId;
  const itemDetails = browsingData.find(item => item.id === itemId);

  return (
    <View>
      <TextComponent text={itemDetails.title} type="Bold" color="white" />
    </View>
  );
};

export default BrowseScreens;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 30,
  },
});
