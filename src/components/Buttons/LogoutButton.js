import {React, useState} from 'react';
import {StyleSheet, TouchableOpacity, Pressable, View} from 'react-native';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

const LogoutButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation();

  const handleModal = () => {
    navigate.navigate('LogInScreen');
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
        <Pressable onPress={() => setModalVisible(false)} />

        <View style={styles.modalView}>
          <TextComponent
            text={'Are you sure?'}
            type="Bold"
            size={12}
            color="black"
          />
          <View style={styles.buttonsContainer}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <TextComponent
                text={'Cancel'}
                type="Bold"
                size={14}
                color="red"
              />
            </Pressable>

            <Pressable onPress={handleModal}>
              <TextComponent
                text={'Logout'}
                type="Bold"
                size={14}
                color="black"
              />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => setModalVisible(true)}>
          <TextComponent text={'Log out'} type="Bold" size={14} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  logout: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.25,
    height: Metrics.screenHeight * 0.05,
    borderRadius: Metrics.scale(30),
    marginBottom: Metrics.scale(40),
  },
  logoutContainer: {
    alignItems: 'center',
    margin: Metrics.scale(20),
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: Metrics.scale(20),
    alignItems: 'center',
    height: Metrics.screenHeight * 0.1,
    justifyContent: 'space-between',
    padding: Metrics.scale(10),
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.5,
  },
});
