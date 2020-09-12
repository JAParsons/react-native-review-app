import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/home';

export default App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  return !fontsLoaded ? <AppLoading /> : <Home />;
};
