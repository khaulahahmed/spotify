import {useNavigation} from '@react-navigation/native';
import {React, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Icons} from '../../assets/icons';
import {artistsData} from '../../data/Artists';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';
import TextInputComponent from '../TextInput/TextInputComponent';

const AddArtist = () => {
  // useEffect(() => {
  // }, [selectedArtists]);

  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation();
  const [selectedArtists, setSelectedArtists] = useState([]);

  const addSelected = item => {
    console.log('item', item);
    setSelectedArtists(selectedArtists.concat(item));
    console.log('array ', selectedArtists);
  };

  const renderArtist = ({item}) => (
    <Pressable
      onPress={() => addSelected(item)}
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
    </Pressable>
  );
  return (
    <>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.ModalView}>
          <ScrollView>
            {/* close button */}
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Image source={Icons.close} />
            </Pressable>
            {/* close button */}

            {/* ModalView */}
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
          </ScrollView>

          <Pressable
            // onPress={() => setModalVisible(false)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}>
              <TextComponent
                text={'Done'}
                type="Bold"
                size={14}
                color="black"
              />
            </TouchableOpacity>
          </Pressable>
        </View>
      </Modal>
      {/* Modal View */}

      <FlatList
        data={selectedArtists}
        renderItem={({item}) => (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Metrics.screenWidth * 0.56,
                justifyContent: 'space-around',
                alignContent: 'flex-start',
              }}>
              <Image
                source={item.imageSource}
                style={{
                  borderRadius: 250,
                  width: 70,
                  height: 70,
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
          </>
        )}
        keyExtractor={item => item?.id}
      />

      {/* Add Artists Button */}
      <View style={styles.box}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image source={Icons.add} style={styles.image} />
        </Pressable>
        <View style={styles.textStyles}>
          <TextComponent
            text={'Add artists'}
            type="SemiBold"
            size={Metrics.scale(14)}
            color="white"
          />
        </View>
      </View>
      {/* Add Artists Button */}
    </>
  );
};

export default AddArtist;

const styles = StyleSheet.create({
  textStyles: {
    marginHorizontal: Metrics.scale(25),
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

  ModalView: {
    backgroundColor: 'black',
    paddingVertical: Metrics.scale(40),
  },

  button: {
    backgroundColor: 'white',
    height: Metrics.scale(50),
    width: Metrics.screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.scale(30),
  },
  header: {
    width: Metrics.screenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
