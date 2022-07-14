//a forum screen with a message: to contribute, please log in/sign up first
//for not log in user
import React, {useEffect, useRef} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import GetForumReview from '../../../api/GetForumReview';

const NotAuthForumScreen  = ({navigation}) => {

  return(
    <View style= {styles.container}>
      <Text>to contribute, please log in/sign up first</Text>
      {/*Display the reviews*/}
      <GetForumReview />
    </View> 
  );}



export default NotAuthForumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCreateButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  }, 
});