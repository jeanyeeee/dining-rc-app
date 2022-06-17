import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DishScreen  = ({navigation}) => {
  return(
    <View style= {styles.container}>
      <Text>Dish Screen</Text>
    </View>
  ); 
}

export default DishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});