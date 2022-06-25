import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import GetRating from '../../api/DisplayRating';

const DishScreen  = ({route, navigation}) => {
  const foodId = route.params;
  return(
    <View style= {styles.container}>
      <Text>Dish Screen</Text>
      <Text>HaHa look!</Text>
      <GetRating foodID = {foodId.foodId}/>
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