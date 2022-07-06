//Get the Average Rating for each dish
import { StyleSheet, View, Text } from "react-native"
import { collection, getDocs , getDoc, query, where, update} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useRef, useState} from 'react';


//Using the array, function get average rating

const GetUpdateRating = ({food}) => {

            //begin
            foodID = food["info"]["Food ID"];
            const [rating, setRating] = useState([]); 
            const ratingColl = collection(db, "StudentRating");
            const qRating = query(ratingColl, where("Food ID", "==", foodID )) //Will change to the foodID
            useEffect(() => {
                async function fetchData() {
                    const ratingSnapshot = await getDocs(qRating);
                    const ratings = [];
                    //for each food in the list
                    ratingSnapshot.docs.map(doc => {
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
        
            const foodColl = collection(db, "DiningFood");
            const qfood = query(foodColl, where("Food ID", "==", foodID ))
       
            const array = rating.map(a => a["info"]);
        
            const average = array.reduce((a,b) => a+b,0) / array.length;
            //console.log(average)

            console.log("update")
            useEffect(() => {
                async function fetchData() {
                    const foodSnapshot = await getDocs(qfood);
                foodSnapshot.docs.map(doc => {
                    const foodRef = useRef(doc);
                    update();
                });
                }
                async function update() {
                    await foodRef.update({
                        "Average Rating": average.toFixed(2)
                    });
                    console.log("hello")
                }
                fetchData();
            }, []);   
            //end
}

export default GetUpdateRating;

