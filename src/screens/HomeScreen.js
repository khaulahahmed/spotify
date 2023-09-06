import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, LogBox, ScrollView, StyleSheet, View} from 'react-native';
import {Icons} from '../assets/icons';
import FavoritesList from '../components/List/FavoritesList';
import HorizontalList from '../components/List/HorizontalList';
import TextComponent from '../components/Text/TextComponent';
import {popularAlbums} from '../data/PopularAlbums';
import recentlyPlayed from '../data/RecentlyPlayed';
import {Recommendations} from '../data/Recommendations';
import Metrics from '../theme/Metrics';

function HomeScreen() {
  const userName = 'Khaulah Ahmed ';
  const navigate = useNavigation();

  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists']);
  });

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.heading}>
          <TextComponent
            text={'Good afternoon'}
            type="ExtraBold"
            size={20}
            color="white"
          />
          <View style={styles.headerIcons}>
            <Pressable onPress={() => navigate.navigate('WhatsNewScreen')}>
              <Image source={Icons.bell} />
            </Pressable>
            <Image source={Icons.recent} />
            <Pressable onPress={() => navigate.navigate('settings')}>
              <Image source={Icons.setting} />
            </Pressable>
          </View>
        </View>
        <FavoritesList />

        <View>
          <TextComponent
            text={'Recommended for today'}
            type="ExtraBold"
            size={20}
            color="white"
          />
        </View>

        <HorizontalList data={Recommendations} />
        <View>
          <TextComponent
            text={'Recently Played'}
            type="ExtraBold"
            size={20}
            color="white"
          />
          <HorizontalList data={recentlyPlayed} />
        </View>

        <View style={{marginVertical: 10}}>
          <TextComponent
            text={'Popular Albums'}
            type="ExtraBold"
            size={20}
            color="white"
          />
          <HorizontalList data={popularAlbums} />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: Metrics.scale(20),
    flexDirection: 'column',
    overflow: 'hidden',
    // justifyContent: 'space-evenly',
  },
  heading: {
    marginBottom: Metrics.scale(20),
    marginTop: Metrics.scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.25,
  },
});
