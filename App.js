import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
import {QueryClientProvider, QueryClient, useQuery} from 'react-query';

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists']);
    LogBox.ignoreLogs(['ViewPropTypes']);
  });
  const queryClient = new QueryClient();

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
};

export default App;
