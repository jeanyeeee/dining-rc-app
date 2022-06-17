import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/tabs';
import {View, StyleSheet} from 'react-native';


const App = () => {
  return(
      <NavigationContainer>
          <BottomTab />
      </NavigationContainer>
  );
}

export default App;
