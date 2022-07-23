import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, where, orderBy, updateDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetImage from '../ui/ImagePicker';
import * as RootNavigation from '../navigation/RootNavigation';

//params: food Ref ID
const DishComponent = ({id, item, navigation}) => {
    const [rating, setRating] = useState(NaN);
    const [review, setReview] = useState([]);
    const dishRef = id;
    const reviewColl = collection(db, "StudentRating")
    const f1 = query(reviewColl, where("Food Ref ID", "==", dishRef));

    useEffect(() => {
        async function fetchData() {
            const reviewSnapshot = await getDocs(f1);
            const reviews = [];
            //for each food in the list
            const reviewList = reviewSnapshot.docs.map(doc => {
               //console.log("Data is", doc.data())
               const obj = doc.data(); //Refers to 1 food item
                       //console.log("doc rating: ", obj["Rating"])
                reviews.push(obj["Rating"]) //Other information relating to the food
               })
        //console.log(foods);
        setReview(reviews)
    }
    fetchData();

}, [item, rating])    

const average = review.reduce((a,b) => a+b,0) / review.length;
const update = (aveRating) => {
    //setRating(aveRating);
    if (aveRating != rating) {
        setRating(aveRating);
        updateDoc(doc(db, "DiningFood", dishRef), {
            "Average Rating": aveRating
        })
    }
}

//onPress navigation feature to be added after static pages have been fully created 
if (isNaN(average)) {
    return(
        <Pressable style = {styles.pressable} 
        onPress={() => {RootNavigation.navigate('Dish', 
        {foodID: item["info"]["Food ID"], 
        foodName: item["info"]["Food Name"],
        foodImage: item["info"]["Image"],
        })}}>
            <View style = {styles.inner}>
                <GetImage style= {styles.image} name = {item["info"]["Image"]}/>
                <View style = {styles.innerText}>
                    <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                    <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text>
                    {update(0)}
                    <Text style= {styles.itemText}>Average Rating: 0</Text>
                </View> 
            </View> 
        </Pressable> 
)
} else {
    return(
        <Pressable style = {styles.pressable} 
        onPress={() => {RootNavigation.navigate('Dish', 
        {foodID: item["info"]["Food ID"], 
        foodName: item["info"]["Food Name"],
        foodImage: item["info"]["Image"],
        })}}>
            <View style = {styles.inner}>
                <GetImage style= {styles.image} name = {item["info"]["Image"]}/>
                <View style = {styles.innerText}>
                    <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                    <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text>
                    {update(average.toFixed(2))}
                    <Text style= {styles.itemText}>Average Rating: {average.toFixed(2)}</Text>
                </View> 
            </View> 
        </Pressable> 
)
}
    
        }

export default DishComponent;

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