//Get the Average Rating for each dish
import { StyleSheet, View, Text } from "react-native"
import { collection, getDocs , getDoc, query, where, updateDoc} from 'firebase/firestore';
import {db} from '../firebase';
import React, {useEffect, useRef, useState} from 'react';


//Using the array, function get average rating
const GetNewUpdateRating = ({food}) => {
            console.log(" begin update")
            let rating = [];
            //begin
            let foodID = food["Food ID"];
            const ratingColl = collection(db, "StudentRating");
            const qRating = query(ratingColl, where("Food ID", "==", foodID )) //Will change to the foodID
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
            rating = ratings;
            }
            fetchData();
            console.log("update: rating array: ", rating)
        
            const foodColl = collection(db, "DiningFood");
            const qfood = query(foodColl, where("Food ID", "==", foodID ))
       
            const array = rating.map(a => a["info"]);
        
            const average = array.reduce((a,b) => a+b,0) / array.length;
            console.log(average)

            console.log("update")
            //console.log("qfood from query id: ", qfood);
            async function fetchData2() {
                const foodSnapshot = await getDoc(qfood);
                console.log("foodSnap :", foodSnapshot);
                foodSnapshot.docs.map(doc => {
                    const obj = doc.data();
                    console.log("doc from foodSnapshot: ", obj);
                    update(average.toFixed(2));
                });
            }
            async function update(updates) {
                await updateDoc(qfood, {
                    "Average Rating": updates
                });
            }
            fetchData2();
            //end
}

export default GetNewUpdateRating;


/* update the rating:*/
/*
const [updateFood, setUpdateFood] = useState([]);
const foodColl = collection(db, "DiningFood")

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
      setUpdateFood(foods)
  }
  fetchData();
  }, [updateFood]);
  //console.log("UpdateFood: ", updateFood);
  useEffect(() => {
      console.log("UpdateFood is good", updateFood);
      updateFood.forEach(data => {
        console.log("each food item: ", data);
        GetNewUpdateRating(data)
      }); 
  }, [updateFood])

*/
