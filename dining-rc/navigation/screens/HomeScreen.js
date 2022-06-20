import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { doc, getFirestore, collection, getDocs , getDoc} from 'firebase/firestore';
const Stack = createNativeStackNavigator();
import { db } from '../../firebase';
import GetData from '../../api/FoodApi';


//MAIN: HomeScreen
export default function HomeScreen() {
  //Create the Button
  const [dish, setDish] = useState(true)
  //change to listen to person user name after
  const user = "You"
  return(
    <View style= {styles.container}>
      {/* Header Buttons - Hello, <User> and Image */}
      <View>
        <Text style= {styles.text}>Hello, {user}</Text> 
      </View>
      {/* Header Buttons -  Popular Dishes, All Stalls */}
      <View style= {styles.buttonArrangement}>
        {/* Header Buttons -  Popular Dishes */}
      <TouchableOpacity 
        onPress={() => {
          setDish(true)
        }}>
        <View style = {{...styles.leftButton,
          backgroundColor: dish ? "#DFE2E5" : "#FCFCFC",
          }}>
            <Text style={styles.textAlt}>Popular Dishes</Text>
          </View>
      </TouchableOpacity>

    {/* Header Buttons -  All Stalls */}
    <TouchableOpacity onPress = {() => {setDish(false)}}>
        <View style = {{...styles.rightButton,
          backgroundColor: !dish ? "#DFE2E5" : "#FCFCFC",
          }}>
            <Text style={styles.textAlt}>All Stalls</Text>
          </View>
    </TouchableOpacity>
      </View>
        {/*View food*/}
          {/*Trying using List*/}
      <GetData />


      </View>

  ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  text : {
    color: "#3D3D3D",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 55,
    paddingTop: 30,
  },
  textAlt: {
    color: "#0B735F",
    textAlign: "center",
    fontWeight:"bold",
    fontSize: 16,
  },
  leftButton: {
    padding: 20, 
    borderRadius: 20, 
  },
  rightButton: {
    padding: 20, 
    borderRadius: 20, 
  },

  buttonArrangement:  {
    backgroundColor: "#FCFCFC",
    marginTop: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent: 'center',
  }
});