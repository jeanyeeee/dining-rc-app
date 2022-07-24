import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import ForumNavigate from '../ForumNavigation/ForumNav';
import { LogBox } from 'react-native';


const ForumScreen  = ({route, navigation}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return(
    <View style= {styles.container}>
      <ForumNavigate navigation ={navigation} />
    </View> 
  );}



export default ForumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  floatingCreateButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  }, 
});