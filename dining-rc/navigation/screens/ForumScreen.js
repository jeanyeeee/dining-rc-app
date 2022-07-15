import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import ForumNavigate from '../ForumNavigation/ForumNav';

const ForumScreen  = ({route, navigation}) => {
  return(
    <View style= {styles.container}>
      <ForumNavigate/>
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