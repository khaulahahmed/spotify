import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Text,
} from 'react-native';
import TextComponent from '../Text/TextComponent';
import Metrics from '../../theme/Metrics';
import {premiumList} from '../../data/PremiumList';
import {COLORS} from '../../theme/Colors';
import {SlidingDot} from 'react-native-animated-pagination-dots';

const PremiumHorizontalList = () => {
  const renderPremiumList = ({item}) => (
    <View style={styles.boxContainer} containerStyle={{borderRadius: 10}}>
      <View style={styles.leftBox}>
        <Text style={styles.text1}>
          <TextComponent
            text={'FREE'}
            type="SemiBold"
            size={12}
            color="white"
          />
        </Text>
        <Text style={styles.text2}>
          <TextComponent text={item.free} type="Bold" size={16} color="white" />
        </Text>
      </View>
      <ImageBackground source={require('../../assets/images/green.png')}>
        <View style={styles.rightBox}>
          <Text style={styles.text1}>
            <TextComponent
              text={'PREMIUM'}
              type="SemiBold"
              size={12}
              color="white"
            />
          </Text>
          <Text style={styles.text2}>
            <TextComponent
              text={item.premium}
              type="Bold"
              size={16}
              color="white"
            />
          </Text>
        </View>
      </ImageBackground>
    </View>
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        data={premiumList}
        keyExtractor={item => item.id}
        renderItem={renderPremiumList}
        horizontal={true}
        pagingEnabled
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
      <View style={styles.dotStyle}>
        <SlidingDot
          data={premiumList}
          scrollX={scrollX}
          inActiveDotOpacity={0.5}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: COLORS.LIGHT_GREY,
          }}
          containerStyle={{
            bottom: -40,
            alignSelf: 'center',
            marginTop: Metrics.scale(15),
          }}
        />
      </View>
    </View>
  );
};

export default PremiumHorizontalList;

const styles = StyleSheet.create({
  flatlistContainer: {
    borderRadius: Metrics.scale(19),
    marginTop: Metrics.scale(50),
  },

  leftBox: {
    height: Metrics.scale(170),
    width: Metrics.scale(170),
    backgroundColor: COLORS.GREY_BLACK,
  },
  rightBox: {
    height: Metrics.scale(170),
    width: Metrics.scale(170),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    alignItems: 'center',
    marginTop: Metrics.scale(5),
    textAlign: 'center',
  },
  text2: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: Metrics.scale(7),
    marginBottom: Metrics.scale(10),
  },

  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: Metrics.scale(23),
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  dotStyle: {
    marginBottom: Metrics.scale(60),
  },
});
