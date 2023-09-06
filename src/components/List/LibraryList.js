import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  LogBox,
  StyleSheet,
  View,
} from 'react-native';
import {Favorites} from '../../data/Favorites';
import {COLORS} from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';

function LibraryList() {
  const renderFavoriteItems = ({item}) => (
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
    </View>
  );

  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists']);
  });
  return (
    <FlatList
      data={Favorites}
      keyExtractor={item => item.id}
      renderItem={renderFavoriteItems}
      //   numColumns={2}
      // contentContainerStyle={styles.flatlist}
    />
  );
}

export default LibraryList;

const styles = StyleSheet.create({
  textStyles: {
    marginHorizontal: Metrics.scale(10),
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    margin: Metrics.scale(4),
    height: Dimensions.get('window').width / 2 - 24,
    backgroundColor: COLORS.DARKER_GREY,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Metrics.scale(60),
    borderRadius: Metrics.scale(9),
  },
  image: {
    width: 50,
    height: Metrics.scale(60),
  },
});
