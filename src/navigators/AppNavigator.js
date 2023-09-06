import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import {COLORS} from '../theme/Colors';
import BottomTabNavigator from './BottomTabNavigator';
import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';
import WhatsNewScreen from '../screens/WhatsNewScreen';
import Camera from '../components/camera/Camera';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import BrowseScreens from '../screens/BrowseScreens';
import AlbumScreens from '../screens/AlbumScreens';

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Screen
        name="bottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.GREY_BLACK,
            opacity: 0.99,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />

      <Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="WhatsNewScreen"
        component={WhatsNewScreen}
        options={{
          headerShown: true,
          title: "What's New",
          headerStyle: {
            backgroundColor: 'black',
            opacity: 0.99,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="LibraryScreen"
        component={YourLibraryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="BrowseScreens"
        component={BrowseScreens}
        options={{
          headerShown: true,
        }}
      />

      <Screen
        name="AlbumScreens"
        component={AlbumScreens}
        options={{
          headerShown: true,
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
