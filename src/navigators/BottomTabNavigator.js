import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PremiumScreen from '../screens/PremiumScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import {COLORS} from '../theme/Colors';
import Metrics from '../theme/Metrics';
const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          opacity: 0.9,
          borderWidth: 0,
          borderColor: 'transparent',
          height: Metrics.scale(60),
          padding: Metrics.scale(10),
        },
        tabBarLabelStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 11,
        },
      }}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/homepage.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '##C4C4C4',
              }}
            />
          ),
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/search.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '#C4C4C4',
              }}
            />
          ),
        }}
      />
      <Screen
        name="YourLibrary"
        component={YourLibraryScreen}
        options={{
          tabBarLabel: 'Your Library',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/library.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '#C4C4C4',
              }}
            />
          ),
        }}
      />
      <Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/spotify.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : COLORS.DARK_GREY,
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
