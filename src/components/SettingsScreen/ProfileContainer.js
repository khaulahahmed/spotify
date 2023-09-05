import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Metrics from '../../theme/Metrics';
import TextComponent from '../Text/TextComponent';
import {Images} from '../../assets/images';

const ProfileContainer = () => {
  const userName = 'Khaulah Ahmed ';

  return (
    <View style={styles.profileContainer}>
      <Image
        source={Images.profile_user}
        style={{
          height: Metrics.scale(60),
          width: Metrics.scale(60),
        }}
      />
      <View>
        <TextComponent text={userName} type="Bold" size={18} color="white" />
        <TextComponent text={'View Profile'} type="SemiBold" size={14} />
      </View>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.59,
    marginBottom: Metrics.scale(30),
    height: Metrics.scale(60),
  },
});
