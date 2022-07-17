//This is to add food into database
//Template for adding food
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {addDoc, collection, Timestamp, updateDoc, where} from "firebase/firestore"
import {db} from '../firebase';

const AddFood = () => {
    useEffect(() => {
        async function addData() {
            const foodID = 13;
            const image = "/DiningFoodImages/charsiew-13.jpeg"
            //const date = Timestamp.fromDate(new Date("August 3, 2022"))
            const ref = doc(db, "DiningFood", where("Food ID", "==", foodID))
            await updateDoc(ref, {
                "Image": image
            })
            console.log("Added :", foodID);
            
        
        }
        addData();
    }, [])
    return(
        <View><Text>AddFood</Text></View>
    )

}

export default AddFood

const styles = StyleSheet.create({})