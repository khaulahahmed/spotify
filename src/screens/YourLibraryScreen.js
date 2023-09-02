import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';
import TextComponent from '../components/Text/TextComponent';
import Metrics from '../theme/Metrics';
import LibraryHeader from '../components/Headers/LibraryHeader';
import RecentHeading from '../components/RecentHeading';
import {Favorites} from '../data/Favorites';
import {COLORS} from '../theme/Colors';
import FavoritesList from '../components/List/FavoritesList';
import LibraryList from '../components/List/LibraryList';
import LinearGradient from 'react-native-linear-gradient';

function YourLibraryScreen() {
  const numberOfSongs = 2;
  const renderLikedItems = ({item}) => {
    <View style={styles.box}>
      <Image source={item.imageSource} style={styles.image} />
      <View style={styles.textStyles}>
        <TextComponent
          text={item.title}
          type="ExtraBold"
          size={Metrics.scale(13)}
          color="white"
        />
      </View>
    </View>;
  };

  return (
    <View style={styles.rootContainer}>
      <LibraryHeader />
      <View style={styles.button}>
        <Button
          style={styles.button}
          color={COLORS.GREY_BLACK}
          title="Playlists"
        />
      </View>

      <RecentHeading />
      <View style={styles.box}>
        <View style={styles.image}>
          <LinearGradient
            colors={['#001F3F', '#3498db', '#87CEEB']} // Blue to light blue gradient colors
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.boxContainer}>
            <Image source={require('../assets/icons/favorite.png')} />
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

      <View style={styles.box}>
        <Image
          source={require('../assets/icons/add.png')}
          style={styles.image}
        />
        <View style={styles.textStyles}>
          <TextComponent
            text={'Add artists'}
            type="Regular"
            size={Metrics.scale(13)}
            color="white"
          />
        </View>
      </View>
      {/* <LibraryList /> */}
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
  },

  textStyles: {
    marginHorizontal: Metrics.scale(35),
    marginTop: Metrics.scale(20),
    flexDirection: 'column',
    // justifyContent: 'center',
    // verticalAlign: 'center',
  },
  box: {
    // flex: 1,
    flexDirection: 'row',
    margin: Metrics.scale(4),
    // height: Metrics.scale(20),
    // backgroundColor: COLORS.DARKER_GREY,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Metrics.scale(80),
    borderRadius: Metrics.scale(9),
    marginBottom: Metrics.scale(20),
    // height: Metrics.scale(20),
  },
  boxContainer: {
    width: Metrics.scale(80),
    height: Metrics.scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
  },
  image: {
    width: 70,
    height: Metrics.scale(70),
    borderRadius: Metrics.scale(40),
  },
});
