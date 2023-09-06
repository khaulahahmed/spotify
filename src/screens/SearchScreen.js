import React from 'react';
import {StyleSheet, View} from 'react-native';
import BrowsingList from '../components/List/BrowsingList';
import TextComponent from '../components/Text/TextComponent';
import TextInputComponent from '../components/TextInput/TextInputComponent';
import CameraIcon from '../components/camera/CameraIcon';
import Metrics from '../theme/Metrics';

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
        <CameraIcon />
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
