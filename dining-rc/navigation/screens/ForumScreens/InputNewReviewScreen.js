import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView} from 'react-native';
import { ButtonComponent, InputField, ErrorMessage } from '../../../components';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase';
import { addDoc, collection, doc, FieldValue, Timestamp } from 'firebase/firestore';

//TODO: integrate authentication before add new review
//TODO: handle error, update database, after submit redirect to the forum (and the forum must show the newest update)
//image, stall name, food name, review, rating, date, user into the database
export default function InputNewReviewScreen({route, navigation }) {
  const [Review, setReview] = useState('');
  const [Rating, setRating] = useState(0);
  const [loginError, setLoginError] = useState('');

  const food = route.params // contain: stallName, foodName, foodID, foodImage
  const auth = getAuth();

  const onSubmit = async () => {
    try {
      if (Rating !== '' && Review !== '') {
        //await set new review
        //right now: after press submit, does nothing
        console.log("rating: ", Rating);
        console.log("review: ", Review);
        console.log("Food Name ", food.foodName);
        await addDoc(collection(db, "StudentRating"), {
          Date: Timestamp.now(),
          Feedback: Review,
          "Food ID": food.foodID,
          "Food Name": food.foodName,
          Rating: parseInt(Rating),
          userID: auth.currentUser.uid
        });
        navigation.navigate("AuthForum");
        }      
  } catch (error) {
      //setLoginError(error.message);
      console.log("error: ", error.message);
    }
  };

  //create a dropdown of the food that date menu served
  //using react-native-material-dropdown
  //choosing the dish -> 

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Tell us what you think of this dish</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        placeholder='Rate this dish'
        autoCapitalize='none'
        keyboardType='number-pad' //need to limit to 5 or handle error when input > 5
        autoFocus={true}
        value={Rating}
        onChangeText={text => setRating(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        placeholder='What do you think of this dish?'
        autoCapitalize='none'
        keyboardType='default'
        autoFocus={true}
        value={Review}
        onChangeText={text => setReview(text)}
      />
      
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}

      <ButtonComponent
        onPress={onSubmit}
        backgroundColor='#0B735F'
        title='Submit'
        
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2A3037',
    alignContent: 'left',
    paddingBottom: 10,
  },
  smallText: {
    fontSize: 16,
    color: '#2A3037',
    paddingBottom: 20,
  }
});