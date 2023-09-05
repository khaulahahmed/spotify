import React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native';
import TextComponent from '../components/Text/TextComponent';
import Metrics from '../theme/Metrics';
import TextInputComponent from '../components/TextInput/TextInputComponent';
import {browsingData} from '../data/BrowsingData';
import BrowsingList from '../components/List/BrowsingList';

const SearchScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <TextComponent
          text={'Search'}
          type="ExtraBold"
          size={20}
          color="white"
        />
        <Image
          source={require('../assets/icons/camerax2.png')}
          style={styles.image}
        />
      </View>
      <TextInputComponent children={'What do you want to listen to?'} />
      <View style={{marginHorizontal: Metrics.scale(15)}}>
        <TextComponent
          text={'Browse All'}
          type={'ExtraBold'}
          size={15}
          color={'white'}
        />
      </View>
      <BrowsingList />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: Metrics.scale(20),
    paddingVertical: Metrics.scale(40),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.scale(10),
    marginVertical: Metrics.scale(5),
  },
  image: {
    marginTop: Metrics.scale(5),
    width: Metrics.scale(30),
    height: Metrics.scale(30),
  },
});
