//This is to add food into database
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {addDoc, collection, Timestamp} from "firebase/firestore"
import {db} from '../firebase';

const AddFood = () => {
    useEffect(() => {
        async function addData() {
            const stallID = 3;
            const stallName = "Vegetarian"

            const docRef = await addDoc(collection(db, "DiningFood"), {
                "Average Rating" : 0,
                "Date": Timestamp.fromDate(new Date("August 2, 2022")),
                "Food ID": 20,
                "Food Name": "Shredded Potato and Green Chilli",
                "Stall ID": stallID,
                "Stall Name": stallName,
            
            });
            const docRef2 = await addDoc(collection(db, "DiningFood"), {
                "Average Rating" : 0,
                "Date": Timestamp.fromDate(new Date("August 2, 2022")),
                "Food ID": 21,
                "Food Name": "Chappati, Dhall and Fruits",
                "Stall ID": stallID,
                "Stall Name": stallName,
            
            });
            const docRef3 = await addDoc(collection(db, "DiningFood"), {
                "Average Rating" : 0,
                "Date": Timestamp.fromDate(new Date("August 2, 2022")),
                "Food ID": 22,
                "Food Name": "Rice Bento with Mock Char Siew",
                "Stall ID": stallID,
                "Stall Name": stallName,
            
            });


            console.log("Id1:", docRef.id);
            console.log("Id2:", docRef2.id);
            console.log("Id3:", docRef3.id);

        }
        addData();
    }, [])
    return(
        <View><Text>AddFood</Text></View>
    )

}

export default AddFood

const styles = StyleSheet.create({})