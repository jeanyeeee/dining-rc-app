import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import GetForumReview from '../../../api/GetForumReview';

const AuthForumScreen  = ({navigation}) => {
  return(
    <View style= {styles.container}>
      <Text>Forum Screen here!</Text>
      <GetForumReview navigation={navigation}/>
      <Button 
        style = {styles.floatingCreateButtonStyle}
        onPress = {() => navigation.navigate('NewReview')}
        title = "Create new Review"
        />
    </View> 
  );}



export default AuthForumScreen;

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