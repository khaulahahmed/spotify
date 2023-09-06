import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';
import {Icons} from '../../assets/icons';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';

const CameraIcon = () => {
  const navigate = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [barcode, setBarcode] = useState(null);

  return (
    <>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.ModalView}>
          <View>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Image source={Icons.close} />
            </Pressable>
          </View>
          <TextComponent
            text={'Scan QR Code'}
            type="ExtraBold"
            size={20}
            color="black"
          />

          {barcode ? (
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'navy',
                  borderRadius: 10,
                  paddingHorizontal: 15,
                }}
                onPress={() => navigation.navigate('Your next screen')}>
                <Text style={styles.rmCameraResultText2}>
                  Scan Successfully. Tap to fill the Audit.
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <RNCamera style={styles.rnCamera} onBarCodeRead={setBarcode} />
          )}
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Image source={Icons.camera2} style={styles.image} />
      </Pressable>
    </>
  );
};

export default CameraIcon;

const styles = StyleSheet.create({
  rnCamera: {
    flex: 1,
    width: Metrics.screenWidth * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.scale(50),
  },
  rmCameraResult: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },

  rmCameraResultText2: {
    fontSize: 20,
    color: 'white',
  },
  ModalView: {
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: Metrics.screenHeight,
    paddingVertical: Metrics.scale(40),
    marginTop: Metrics.scale(40),
  },
});
