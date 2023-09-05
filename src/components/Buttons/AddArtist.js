import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import {React, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Metrics from '../../theme/Metrics';
import AddArtistModal from '../LibraryScreen/AddArtistModal';
import TextComponent from '../Text/TextComponent';

const AddArtist = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation();

  const handleModal = () => {
    setModalVisible(() => !modalVisible);
  };

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
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/icons/close.png')} />
            </Pressable>
            <AddArtistModal />
          </ScrollView>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.button}>
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

      <View style={styles.box}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image
            source={require('../../assets/icons/add.png')}
            style={styles.image}
          />
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
});
