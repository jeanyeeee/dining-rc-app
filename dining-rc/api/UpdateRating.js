//Get the Average Rating for each dish
import { StyleSheet, View, Text } from "react-native"
import { collection, getDocs , getDoc, query, where, update, updateDoc, doc} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useRef, useState} from 'react';


//Using the array, function get average rating
const GetUpdateRating = (food) => {

            //begin
            console.log("food: ", food);
            foodID = food["Food ID"];
            let rating = [];
            const ratingColl = collection(db, "StudentRating");
            const qRating = query(ratingColl, where("Food ID", "==", foodID )) //Will change to the foodID
            async function fetchData() {
                    const ratingSnapshot = await getDocs(qRating);
                    //for each food in the list
                    ratingSnapshot.docs.map(doc => {
                       //console.log("Data is", doc.data())
                       const obj = doc.data(); //Refers to 1 food item
                       console.log("doc rating: ", obj["Rating"])
                       rating.push(obj["Rating"])
                       })
            }
            fetchData();
            console.log("rating array: ", rating);
        
            const foodColl = collection(db, "DiningFood");
            const qfood = query(foodColl, where("Food ID", "==", foodID ))
            
            const average = rating.reduce((a,b) => a+b,0) / array.length;
            console.log(average)
            
            console.log("update")
            async function update() {
                const docSnapshot = await getDoc(qfood);
                let id = "";
                docSnapshot.doc.map(data => {
                    id = data.id;
                })
                console.log("doc id: ", id);
                await updateDoc(doc(db, "DiningFood", id), {
                    "Average Rating": average.toFixed(2)
                });
                console.log("hello")
            }
            update();
            //end
}

export default GetUpdateRating;

