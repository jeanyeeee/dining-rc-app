import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/tabs';
import {View, StyleSheet} from 'react-native';
import GetData from './api/FoodApi';

const App = () => {
  return(
    <NavigationContainer>
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