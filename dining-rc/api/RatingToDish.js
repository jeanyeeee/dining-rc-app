import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, where, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetRating from './DisplayRating';
import GetImage from '../ui/ImagePicker';
import * as RootNavigation from '../navigation/RootNavigation';
import GetAveRating from '../ui/GetAveRating';
import GetUpdateRating from './UpdateRating';
import GetSortRating from './SortScreen';
import GetNewUpdateRating from './NewUpdateRating';
import GetData from './PopularDish';

//direction: homeScreen -> getRatingToDish return getData
// in getRatingToDish: use getNewUpdateRating to update the rating to the database
const GetRatingToDish = (navigation) => {
    const [updateFood, setUpdateFood] = useState([]);
    const foodColl = collection(db, "DiningFood")
 
 // update the rating

    useEffect(() => {
        async function fetchData() {
            const foodSnapshot = await getDocs(foodColl);
            const foods = [];
            //for each food in the list
            const foodList = foodSnapshot.docs.map(doc => {
               //console.log("Data is", doc.data())
               const obj = doc.data(); //Refers to 1 food item
               GetNewUpdateRating(obj);
               foods.push({
                id: doc.id, //Random generated
                info: obj //Other information relating to the food
               })
            })
        //console.log(foods);
        setUpdateFood(foods)
    }
    fetchData();
    console.log("UpdateFood is good")
    //updateFood.map(data => GetNewUpdateRating(data));
    }, [updateFood]);

    return (
        <GetData navigation = {navigation}/>
    )
}
export default GetRatingToDish;