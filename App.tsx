import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists']);
  });

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
