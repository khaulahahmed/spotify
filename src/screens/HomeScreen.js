import TextComponent from '../components/Text/TextComponent';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import Metrics from '../theme/Metrics';
import {Recommendations, SongData} from '../data/Recommendations';
import FavoritesList from '../components/List/FavoritesList';
import HorizontalList from '../components/List/HorizontalList';
import recentlyPlayed from '../data/RecentlyPlayed';
import {popularAlbums} from '../data/PopularAlbums';
import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const userName = 'Khaulah Ahmed ';
  const navigate = useNavigation();
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
            <Pressable>
              <Image source={require('../assets/icons/bell.png')} />
            </Pressable>
            <Image source={require('../assets/icons/recent.png')} />
            <Pressable onPress={() => navigate.navigate('settings')}>
              <Image source={require('../assets/icons/setting.png')} />
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
