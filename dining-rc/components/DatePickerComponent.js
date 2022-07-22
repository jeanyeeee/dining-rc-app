//this is the date picker component
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    //this is a global variable
    global.dateString = date.getMilliseconds();

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

    const ShowDate = (props) => {
        return(
            <View>
                <Text>{props.date}</Text>
            </View>
        )
    }
  
    return (
      <View>
          <Button onPress={showDatepicker} title= "Pick A Date" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        {date != new Date(1598051730000) ? <ShowDate date= {date.toDateString()} /> : <></>}
      </View>
    );
  }

export default DatePickerComponent;