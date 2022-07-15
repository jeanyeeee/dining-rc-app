import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetAveRating from '../ui/GetAveRating';
import GetImage from '../ui/ImagePicker';

//TODO: query according to the date of today
const GetForumReview = ({navigation}) => {//input: today time
    const [rating, setRating] = useState([]);
    const ratingColl = collection(db, "StudentRating");
    const qRating = query(ratingColl, orderBy("Date", "desc")) //change into date and for today food only!
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
                info: obj //Other information relating to the food
               })
               })
        //console.log(ratings);
        setRating(ratings);
    }
    fetchData();
}, [qRating])    

    //need create a edit/delete button
    //need a create new review button
    //in create new, can choose from a list of stall, and a list of food that stall serve that day. can choose date first
    //after create new, get data of the food and put : image, stall name, food name, review, rating, date into the database

    /*return a flat list of reviews, similar to the popular dishes */
    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {rating}
        numColumns = {1}
        renderItem = {({item}) => (
                <View style = {styles.inner}>
                    <GetImage style= {styles.image} name = {item["info"]["Image"]}/>
                    <View style = {styles.innerText}>
                        <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                        <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text>
                        <GetAveRating style= {styles.itemText} foodID={item["info"]["Food ID"]}/>
                        <Text style= {styles.itemText}>{item["info"]["Feedback"]}</Text>
                    </View> 
                </View> 
        )} />
    )
}
export default GetForumReview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    pressable: {
        backgroundColor: "#DFE2E5",
        padding: 15,
        borderRadius: 15,
        margin: 15,
        marginHorizontal: 20
    },
    inner: {
        alignItems: "center",
        flexDirection: "row"
    },
    heading: {
        fontWeight: "bold"
    },
    itemText: {
        fontWeight: "300",
        width: 250,
    },
    image: {
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    innerText: {
        flexDirection: "column",
        marginLeft: 20, 
    }
})