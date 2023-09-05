import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from '../components/Text/TextComponent';
import {NewSongsData} from '../data/NewSongs';
import {COLORS} from '../theme/Colors';
import Metrics from '../theme/Metrics';
import {Icons} from '../assets/icons';

const WhatsNewScreen = () => {
  renderNewItems = ({item}) => (
    <View>
      <View style={styles.box}>
        <Image source={item.imageSource} style={styles.image} />
        <View style={styles.textStyles}>
          <TextComponent
            text={item.title}
            type="Bold"
            size={Metrics.scale(16)}
            color="white"
          />
          <TextComponent
            text={item.singer}
            type="Regular"
            size={Metrics.scale(14)}
            color={COLORS.LIGHT_GREY}
          />
          <TextComponent
            text={item.time}
            type="Regular"
            size={Metrics.scale(14)}
            color={COLORS.DARK_GREY}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image source={Icons.playButton} style={styles.iconStyle} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      {/* <View style={styles.button}> */}
      <TouchableOpacity style={styles.button} title="playlists">
        <TextComponent
          text={'Music'}
          type={'SemiBold'}
          size={12}
          color={'white'}
        />
      </TouchableOpacity>
      <View style={styles.subheading}>
        <TextComponent
          text={'New'}
          type={'ExtraBold'}
          size={18}
          color={'white'}
        />
      </View>
      <FlatList
        data={NewSongsData}
        keyExtractor={item => item.id}
        renderItem={renderNewItems}
        contentContainerStyle={{paddingBottom: Metrics.screenHeight * 0.15}}
      />
      {/* </View> */}
    </View>
  );
};

export default WhatsNewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: Metrics.scale(10),
    // marginBottom: Metrics.screenHeight * 0.2,
  },
  button: {
    backgroundColor: COLORS.GREY_BLACK,
    color: COLORS.LIGHT_GREY,
    borderRadius: Metrics.scale(30),
    width: Metrics.screenWidth * 0.2,
    height: Metrics.scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheading: {
    margin: Metrics.scale(10),
    marginVertical: Metrics.scale(20),
  },
  textStyles: {
    // marginHorizontal: Metrics.scale(30),
    marginTop: Metrics.scale(-10),
    // marginVertical: Metrics.scale(4),
    height: Metrics.screenHeight * 0.1,
    justifyContent: 'space-evenly',
    marginRight: Metrics.scale(60),
  },
  box: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Metrics.scale(8),
    height: Metrics.screenHeight * 0.12,
    width: Metrics.screenWidth * 0.9,
    // backgroundColor: COLORS.DARKER_GREY,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  image: {
    width: Metrics.screenHeight * 0.12,
    height: Metrics.screenHeight * 0.12,
  },
  iconStyle: {
    height: Metrics.scale(30),
    width: Metrics.scale(30),
  },
});
