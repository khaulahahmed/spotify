import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';

const Camera = () => {
  barcodeRecognized = ({barcodes}) => {
    barcodes.forEach(barcode => console.warn(barcode.data));
  };
  const [barcode, setBarcode] = useState(null);

  return (
    <View style={styles.rootContainer}>
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
  );
};

export default Camera;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F2F2FC',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.scale(50),
    // paddingHorizontal: Metrics.scale(100),
  },

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
});
