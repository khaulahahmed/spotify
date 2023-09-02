import {React, useLayoutEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Metrics from '../theme/Metrics';
import {Text} from '@react-native-material/core';
import TextComponent from '../components/Text/TextComponent';

const settingsScreen = () => {
  const userName = 'Khaulah Ahmed ';

  useLayoutEffect(() => {
    <View style={styles.rootContainer}></View>;
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/profile-user.png')}
          style={{
            height: Metrics.scale(60),
            width: Metrics.scale(60),
          }}
        />
        <View>
          <TextComponent text={userName} type="Bold" size={18} color="white" />
          <TextComponent text={'View Profile'} type="SemiBold" size={14} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default settingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: Metrics.scale(30),
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    // margin: Metrics.scale(10),
  },
});
