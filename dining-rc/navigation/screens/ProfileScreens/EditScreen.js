import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { ButtonComponent, InputField, ErrorMessage } from '../../../components';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';

//TODO: integrate authentication before add new review
//TODO: handle error, update database, after submit redirect to the forum (and the forum must show the newest update)
//image, stall name, food name, review, rating, date, user into the database
export default function EditScreen({route, navigation }) {
  const [Review, setReview] = useState('');
  const [loginError, setLoginError] = useState('');

  const [defaultRating, setDefaultRating ] = useState(2);
  const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

  const fullStar = require("../../../images/star_filled.png"); 
  const noStar = require("../../../images/star_corner.png");


  const food = route.params // contain: stallName, foodName, foodID, foodImage
  const auth = getAuth();

  const CustomRatingBar = () =>{
    return(
        <View style={styles.customRatingBar}>
            {
                maxRating.map((item, key) => {
                    return(
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key= {item}
                        onPress = {() => setDefaultRating(item)}  
                        >
                        
                        <Image
                        style = {styles.starImage}
                        source = {
                            item <= defaultRating
                            ? fullStar
                            : noStar
                        }
                        />

                      </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

  const onSubmit = async () => {
    try {
      if (defaultRating !== 0 && Review !== '') {
        //await set new review
        //right now: after press submit, does nothing
        console.log("rating: ", defaultRating);
        console.log("review: ", Review);
        console.log("Food Name ", food.foodName);
        console.log("Stall Name ", food.stallName);
        await setDoc(doc(db, "StudentRating", food.id), {
          Date: Timestamp.now(),
          Feedback: Review,
          "Food ID": food.foodID,
          "Food Name": food.foodName,
          "Stall Name": food.stallName,
          "Image": food.foodImage,
          Rating: defaultRating,
          userID: auth.currentUser.uid
        });
        navigation.navigate("ProfileDisplay");
        }      
  } catch (error) {
      //setLoginError(error.message);
      console.log("error: ", error.message);
    }
  };

  const cancel = () => {
    navigation.navigate("ProfileDisplay");
 }

  //create a dropdown of the food that date menu served
  //using react-native-material-dropdown
  //choosing the dish -> 

  //TODO: replace with the stars component!!!
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Tell us what you think of {food.foodName}</Text>
      <View>
      <CustomRatingBar />
    </View>
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
      
      <View flexDirection = {"row"}>
        <View flex = {1}>
            <ButtonComponent
                onPress={onSubmit}
                backgroundColor='#0B735F'
                title='Submit'
                
                tileColor='#fff'
                titleSize={20}
                containerStyle={{
                    top: 15
                }}
            />
        </View>
        <View flex = {1}>
            <ButtonComponent
              style = {styles.button}
              onPress={cancel}
              backgroundColor='#0B735F'
              title='Cancel'
              
              tileColor='#fff'
              titleSize={20}
              containerStyle={{
                top: 15
              }}
            />
        </View>
        
      </View>
      
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
  },
  customRatingBar: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
},
starImage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
},

buttonStyle: {
    justifyContent:"center",
    alignItems:"center",
}
});