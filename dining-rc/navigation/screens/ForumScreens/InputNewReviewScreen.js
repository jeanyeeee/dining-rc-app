import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { ButtonComponent, InputField, ErrorMessage } from '../../../components';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase';
import { addDoc, collection, doc, FieldValue, Timestamp } from 'firebase/firestore';
import StarRatingComponent from '../../../components/StarRatingComponent';
import { connectStorageEmulator } from 'firebase/storage';

//TODO: integrate authentication before add new review
//TODO: handle error, update database, after submit redirect to the forum (and the forum must show the newest update)
//image, stall name, food name, review, rating, date, user into the database
export default function InputNewReviewScreen({route, navigation }) {
  const [Review, setReview] = useState('');
  //const [Rating, setRating] = useState(0);
  const [loginError, setLoginError] = useState('');

  const food = route.params // contain: stallName, foodName, foodID, foodImage
  const auth = getAuth();


  const [defaultRating, setDefaultRating ] = useState(2);
  const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

  const fullStar = require("../../../images/star_filled.png"); 
  const noStar = require("../../../images/star_corner.png");
  
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

  //TO DO: sync to Firebase
  const onSubmit = async () => {
    try {
      if (defaultRating !== 0 && Review !== '') {
        //await set new review
        //right now: after press submit, does nothing
        console.log("rating: ", defaultRating);
        console.log("review: ", Review);
        console.log("Food Name ", food.foodName);
        //The date Aug 30 is set so that the food item will appear first!
        await addDoc(collection(db, "StudentRating"), {
          Date: Timestamp.fromDate(new Date("August 30, 2022")),
          Feedback: Review,
          "Food ID": food.foodID,
          "Food Name": food.foodName,
          "Stall Name": food.stallName,
          "Image": food.foodImage,
          "Food Ref ID": food.id,
          Rating: defaultRating,
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
      <Text style={styles.title}>What do you think of {food.foodName}?</Text>
      
      {/*Stars Rating Here*/}

      <View>
      {/*Show the star rating */}
      <CustomRatingBar />
        {/*Show the text*/}
      <Text>
        {/* {defaultRating + '/' + maxRating.length} */}
      </Text>
        {/*Change this to changing default rating in the database instead */}
      <TouchableOpacity 
        activeOpacity={0}
        onPress = {() => alert(defaultRating)}
      ><Text></Text></TouchableOpacity>
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