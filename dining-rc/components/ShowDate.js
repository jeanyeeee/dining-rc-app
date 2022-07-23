import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowDate = (props) => {
//props.time is a timestamp
  return (
    <View>
      <Text style= {styles.text}>{props.timeStamp}</Text>
    </View>
  )
}

export default ShowDate

const styles = StyleSheet.create({
    text: {
        color: "#0B735F",
        textAlign: "center",
        fontWeight:"bold",
        fontSize: 20,
    }
})