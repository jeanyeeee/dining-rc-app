import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

//MAIN: HomeScreen
export default function HomeScreen() {
  //Create the Button
  const [dish, setDish] = useState(true)
  return(
    <View style= {styles.container}>
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
    <TouchableOpacity 
    onPress = {() => {
      setDish(false)
    }}>
        <View style = {{...styles.rightButton,
          backgroundColor: !dish ? "#DFE2E5" : "#FCFCFC",
          }}>
            <Text style={styles.textAlt}>All Stalls</Text>
          </View>
    </TouchableOpacity>
      </View>
        {/* Content */}
      <ScrollView>

      </ScrollView>
      </View>

  ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    alignItems: 'center',
    justifyContent: 'center',

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
    marginTop: 30, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  }
});