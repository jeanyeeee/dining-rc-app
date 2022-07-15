//This is to add food into database
//Template for adding food
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {addDoc, collection, Timestamp} from "firebase/firestore"
import {db} from '../firebase';

const AddFood = () => {
    useEffect(() => {
        async function addData() {
            const stallID = 3;
            const stallName = "Vegetarian"
            const date = Timestamp.fromDate(new Date("August 3, 2022"))
            
                        const docRef = await addDoc(collection(db, "DiningFood"), {
                            "Average Rating" : 0,
                            "Date": date ,
                            "Food ID": 34 ,
                            "Food Name": "Caesar Salad",
                            "Stall ID": stallID,
                            "Stall Name": stallName
                        
                        })
                        console.log(stallName);
                        console.log("Id1:", docRef.id);
            
        }
        addData();
    }, [])
    return(
        <View><Text>AddFood</Text></View>
    )

}

export default AddFood

const styles = StyleSheet.create({})