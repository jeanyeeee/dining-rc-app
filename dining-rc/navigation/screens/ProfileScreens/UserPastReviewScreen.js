//a forum screen with a message: to contribute, please log in/sign up first
//for not log in user
import React, {useEffect, useRef} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import GetUserReview from '../../../api/GetUserPastReview';
import { ButtonComponent, IconButton } from '../../../components';

const PastReviewScreen  = ({navigation}) => {

  const goBackToProfile = () => {
    navigation.navigate("ProfileDisplay");
 }

  return(
    <View style= {styles.container}>
      <View style= {styles.ButtonContainer}>
        {/*<Text fontFamily = {"Cochin"} fontSize = {20}>
          These are your reviews, thank you for your contribution!
        </Text>*/}
        <ButtonComponent
              style = {styles.button}
              onPress={goBackToProfile}
              backgroundColor='#0B735F'
              title='Go Back'
              
              tileColor='#fff'
              titleSize={15}
              containerStyle={{
                top: 15
              }}
              />
      </View>
      {/*Display the reviews*/}
      {/*<IconButton color ={'#000000'} size = {25} onPress = {goBackToProfile} name = {'caretleft'}/>*/}
      <View style = {styles.TextContainer}>
        <GetUserReview />
      </View>
      
      
    </View> 
  );}

//<Icon name={'chevron-left'} onPress={ () => { goBack() } }  />

export default PastReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ButtonContainer: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 280,
    backgroundColor: '#fff',
  },
  floatingCreateButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  },
  OptionOne: {
    flex: 0.3,
    left: 2
  },
});