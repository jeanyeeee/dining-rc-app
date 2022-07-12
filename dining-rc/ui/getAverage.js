//For the array, it will get the rating for the dishes from the database
//Not used anywhere yet

import { StyleSheet, View, Text } from "react-native"
import { doc, updateDoc, collection, getDocs , getDoc, query, where, serverTimestamp} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useState} from 'react';
import { defineAnimation } from "react-native-reanimated";


//Takes in the unfiltered array
//Sorts according to ratings
//Returns an array

export default function getAverage(array) {
    const [rating, setRating] = useState([]); 
    const ratingColl = collection(db, "StudentRating");
    for (let item in array) {
        const qRating = query(ratingColl, where("Food ID", "==", item["id"])) //Will change to the foodID
        useEffect(() => {
            async function fetchData() {
                const ratingSnapshot = await getDocs(qRating);
                const ratings = [];
                //for each food in the list
                const ratingList = ratingSnapshot.docs.map(doc => {
                //console.log("Data is", doc.data())
                const obj = doc.data(); //Refers to 1 food item
                ratings.push({
                    id: doc.id, //Random generated
                    info: obj["Rating"] //Other information relating to the food
                })
                })
            setRating(ratings)
        }
        fetchData();
    }, [])
    
    const array = rating.map(a => a["info"]);
    const average = array.reduce((a,b) => a+b,0) / array.length;
    //update this field in firebase

    const updateDocRef = doc(db, "DiningFood", where("Food ID", "==", item["id"]));
    useEffect(() => {
        async function updateData() {
            await updateDoc(updateDocRef, {
                "Average Rating": average,
                "Time Stamp": serverTimestamp()
            });
        }
        updateData();
    }, [])
}}

