//Get the Average Rating for the food
import { StyleSheet, View, Text } from "react-native"
import { collection, getDocs , getDoc, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useRef, useState} from 'react';
import GetUpdateRating from "./UpdateRating";


//Using the array, function call to update the entire collection rating

const GetSortRating = () => {
    const [food, setFood] = useState([]);
    const foodColl = collection(db, "DiningFood");
    console.log("Get Sort Rating: Start")
    useEffect(() => {
        async function fetchData() {
            const foodSnapshot = await getDocs(foodColl);
            const foods = [];
            //for each food in the list
            const foodList = foodSnapshot.docs.map(doc => {
               //console.log("Data is", doc.data())
               const obj = doc.data(); //Refers to 1 food item
               foods.push({
                id: doc.id, //Random generated
                info: obj //Other information relating to the food
               })
               })
        //console.log(foods);
        
        setFood(foods)
    }
    fetchData();
}, [])
//food = {data}, data's type is an array of object
    return food.map(data => <GetUpdateRating food = {data}/>)
}

export default GetSortRating;

