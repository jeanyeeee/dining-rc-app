//Get the Average Rating for the food
import { StyleSheet, View, Text } from "react-native"
import { collection, getDocs , getDoc, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useState} from 'react';


//Using the array, function get average rating

const GetAveRating = ({foodID}) => {
    const [rating, setRating] = useState([]); 
    const ratingColl = collection(db, "StudentRating");
    const qRating = query(ratingColl, where("Food ID", "==", foodID )) //Will change to the foodID
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
}, [foodID])
    
    const array = rating.map(a => a["info"]);

    const average = array.reduce((a,b) => a+b,0) / array.length;
    //console.log(average)

    return(
        <View>
            <Text>Average Rating: {average.toFixed(2)}</Text>
        </View>    
    )

}

export default GetAveRating;

