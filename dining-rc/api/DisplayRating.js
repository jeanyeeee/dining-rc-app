import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

//TODO: Need to include ratings too
//TODO: onPress -> go to rating page w only the food item
const GetRating = ({foodID}) => {
    const [rating, setRating] = useState([]);
    const ratingColl = collection(db, "StudentRating");
    const qRating = query(ratingColl, where("Food ID", "==", foodID)) //Will change to the foodID
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
}, [])    

    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {rating}
        numColumns = {1}
        renderItem = {({item}) => (
            <Pressable style = {styles.pressable} >
                <View style = {styles.inner}>
                    <Text style= {styles.heading}>{item["info"]["Food ID"]}</Text>
                    <Text style= {styles.itemText}>{item["info"]["Feedback"]}</Text>
                    </View> 
            </Pressable> 
        )} />
    )
}
export default GetRating;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    pressable: {
        backgroundColor: "#DFE2E5",
        padding: 15,
        borderRadius: 15,
        margin: 10,
        marginHorizontal: 10,
    },
    inner: {
        alignItems: "center",
        flexDirection: "column"
    },
    heading: {
        fontWeight: "bold"
    },
    itemText: {
        fontWeight: "300"
    }
})