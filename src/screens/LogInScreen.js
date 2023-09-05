import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import TextComponent from '../components/Text/TextComponent';
import Metrics from '../theme/Metrics';
import {COLORS} from '../theme/Colors';
import {LoginOptionsData} from '../data/LoginOptions';
import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../assets/logo';

const LogInScreen = () => {
  const navigate = useNavigation();

  const renderLoginOptions = ({item}) => (
    <View style={styles.loginContainer2}>
      <Image source={item.icon} style={{justifyContent: 'flex-start'}} />
      <TextComponent
        text={item.title}
        type="ExtraBold"
        size={14}
        color="white"
      />
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <Image source={Logo.SPOTIFYx2} style={{margin: Metrics.scale(15)}} />
      <TextComponent
        text={'Millions of songs. \n Free on Spotify'}
        type="ExtraBold"
        size={25}
        color="white"
      />
      <View style={styles.loginContainer}>
        <TextComponent
          text={'Sign up for free'}
          type="ExtraBold"
          size={14}
          color="black"
        />
      </View>

      <FlatList
        data={LoginOptionsData}
        keyExtractor={item => item.id}
        renderItem={renderLoginOptions}
        style={{flexGrow: 0, marginBottom: Metrics.scale(15)}}
        // contentContainerStyle={{height: Metrics.screenHeight * 0.3}}
      />
      <Pressable onPress={() => navigate.navigate('HomeScreen')}>
        <TextComponent
          text={'Log in'}
          type="ExtraBold"
          size={16}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: Metrics.scale(40),
  },
  loginContainer: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.85,
    height: Metrics.screenHeight * 0.06,
    borderRadius: Metrics.scale(30),
    marginTop: Metrics.scale(30),
    marginBottom: Metrics.scale(10),
  },
  loginContainer2: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.85,
    height: Metrics.screenHeight * 0.06,
    borderRadius: Metrics.scale(30),
    borderWidth: 2,
    borderColor: COLORS.DARKER_GREY,
    marginVertical: Metrics.scale(10),
    flexDirection: 'row',
  },
});
