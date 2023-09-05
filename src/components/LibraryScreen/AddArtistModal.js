import {React} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {artistsData} from '../../data/Artists';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';
import TextInputComponent from '../TextInput/TextInputComponent';

const AddArtistModal = () => {
  const renderArtist = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.scale(10),
      }}>
      <Image
        source={item.imageSource}
        style={{
          borderRadius: 250,
          width: 100,
          height: 100,
          marginBottom: Metrics.scale(10),
        }}
      />
      <TextComponent
        text={item.title}
        type="ExtraBold"
        size={13}
        color="white"
      />
    </View>
  );
  return (
    <View style={styles.header}>
      <TextComponent
        text={'Choose more artists you like.'}
        type="ExtraBold"
        size={27}
        color="white"
      />

      <TextInputComponent children={'Search'} />

      <FlatList
        data={artistsData}
        keyExtractor={item => item.id}
        renderItem={renderArtist}
        numColumns={3}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: Metrics.scale(20),
        }}
      />
    </View>
  );
};

export default AddArtistModal;

const styles = StyleSheet.create({
  header: {
    width: Metrics.screenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
