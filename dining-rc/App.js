import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/tabs';
import {View, StyleSheet} from 'react-native';
import GetData from './api/PopularDish';
import { navigationRef } from './navigation/RootNavigation';

const App = () => {
  return(
    <NavigationContainer ref={navigationRef}>
          <BottomTab />
          <View style= {styles.container}>
          </View>
      </NavigationContainer>


  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
  }
}
)