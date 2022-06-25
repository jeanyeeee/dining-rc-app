import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import GetRating from '../../api/DisplayRating';

const DishScreen  = ({navigation}) => {
  return(
    <View style= {styles.container}>
      <Text>Dish Screen</Text>
      <GetRating id = {1} />
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