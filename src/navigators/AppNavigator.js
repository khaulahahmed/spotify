import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import {COLORS} from '../theme/Colors';
import BottomTabNavigator from './BottomTabNavigator';

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
    </Navigator>
  );
};

export default AppNavigator;
