import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import GetData from '../../api/PopularDish';
import GetStalls from '../../api/AllStalls';
import ShowDate from '../../components/ShowDate';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HomeScreen({route, navigation}) {
  const [dish, setDish] = useState(true)

  const [date, setDate] = useState(new Date(2022,7,30));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);

    };
    
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    };
    
  const showDatepicker = () => {
    showMode('date');
    };




  return(
    <View style= {styles.container}>        
      {/*Date Picker*/}
      <View>
            <Button style= {styles.button} onPress={showDatepicker} title= "Select A Date" />
          {show && (
            <DateTimePicker
              style = {styles.datepicker}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View>
            {date != new Date(1598051730000) ? <ShowDate timeStamp = {date.toDateString()} /> : <></>}
          </View>
        </View>
        <Text style= {styles.textAlt}>{}</Text>
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
      {/*For Tabs*/}
      {/*dish? <GetRatingToDish navigation = {navigation} /> : <GetStalls/>*/}
      {dish? <GetData 
      navigation = {navigation} 

      /> : <GetStalls/>}
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
  },

  button: {
    textAlign: "center",
    justifyContent: "center",
  },
  datepicker: {
    alignSelf: "center",
    paddingHorizontal: 45
  }
});