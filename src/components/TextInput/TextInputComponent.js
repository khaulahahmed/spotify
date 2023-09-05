import React from 'react';
import {StyleSheet, Text, TextInput, Image, View} from 'react-native';
import Metrics from '../../theme/Metrics';

function TextInputComponent({children}) {
  return (
    <View style={styles.textInputContainer}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.icon}
      />
      <TextInput style={styles.textInput} placeholder={children} />
    </View>
  );
}

export default TextInputComponent;
const styles = StyleSheet.create({
  textInput: {
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    padding: Metrics.scale(10),
    margin: 10,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Metrics.scale(40),
    // width: Metrics.scale(500),
    borderRadius: 7,
    margin: Metrics.scale(10),
  },
});
