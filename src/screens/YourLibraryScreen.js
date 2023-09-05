import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AddArtist from '../components/Buttons/AddArtist';
import LibraryHeader from '../components/Headers/LibraryHeader';
import RecentHeading from '../components/RecentHeading';
import TextComponent from '../components/Text/TextComponent';
import {COLORS} from '../theme/Colors';
import Metrics from '../theme/Metrics';
import {Icons} from '../assets/icons';

function YourLibraryScreen() {
  const numberOfSongs = 2;

  return (
    <View style={styles.rootContainer}>
      <LibraryHeader />
      <View style={styles.button}>
        <TouchableOpacity style={styles.button} title="playlists">
          <TextComponent
            text={'PLAYLISTS'}
            type={'SemiBold'}
            size={12}
            color={'white'}
          />
        </TouchableOpacity>
      </View>

      <RecentHeading />
      <View style={styles.box}>
        <View style={styles.image}>
          <LinearGradient
            colors={['#001F3F', '#3498db', '#87CEEB']} // Blue to light blue gradient colors
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.boxContainer}>
            <Image source={Icons.favorite} />
          </LinearGradient>
        </View>
        <View style={styles.textStyles}>
          <TextComponent
            text={'Liked Songs'}
            type="SemiBold"
            size={Metrics.scale(13)}
            color="white"
          />
          <View style={{flexDirection: 'row'}}>
            <TextComponent
              text={'Playlist .'}
              type="Regular"
              size={10}
              color={COLORS.LIGHT_GREY}
            />

            <TextComponent
              text={` ${numberOfSongs} songs`}
              type="Regular"
              size={10}
              color={COLORS.LIGHT_GREY}
            />
          </View>
        </View>
      </View>

      <AddArtist />
    </View>
  );
}

export default YourLibraryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: Metrics.scale(20),
    paddingVertical: Metrics.scale(40),
  },

  button: {
    backgroundColor: COLORS.GREY_BLACK,
    color: COLORS.LIGHT_GREY,
    borderRadius: Metrics.scale(30),
    width: Metrics.screenWidth * 0.3,
    height: Metrics.scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyles: {
    marginHorizontal: Metrics.scale(25),
    // marginTop: Metrics.scale(20),
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'row',
    margin: Metrics.scale(4),
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Metrics.scale(80),
    borderRadius: Metrics.scale(9),
    marginBottom: Metrics.scale(20),
  },
  boxContainer: {
    width: Metrics.scale(80),
    height: Metrics.scale(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.scale(70),
    height: Metrics.scale(70),
    borderRadius: Metrics.scale(40),
  },
});
