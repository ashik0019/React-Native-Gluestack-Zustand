import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import customTheme from './theme/theme';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <GluestackUIProvider config={customTheme}>
      <HomeScreen />
    </GluestackUIProvider>
  );
};

export default App;
