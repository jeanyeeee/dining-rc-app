//this is the date picker component
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Timestamp } from 'firebase/firestore';
import ShowDate from './ShowDate';

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
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

    const showButton = () => {
      return(
        <View></View>
      )
    }

  
    return (
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
    );
  }

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    justifyContent: "center",
  },
  datepicker: {
    alignSelf: "center",
    paddingHorizontal: 45
  }
})
export default DatePickerComponent;