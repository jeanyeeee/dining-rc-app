import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, where, orderBy, startAt, endAt, Timestamp, endBefore} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetImage from '../ui/ImagePicker';
import * as RootNavigation from '../navigation/RootNavigation';
import GetAveRating from '../ui/GetAveRating';

//TODO: Need to include ratings too
//TODO: onPress -> go to rating page w only the food item
const GetData = ({navigation, currDate, nextDate}) => {
    const [food, setFood] = useState([]);
    const foodColl = collection(db, "DiningFood")
    //const currDate = new Date(2022,7,1)
    //const nextDate = new Date(2022,7, 2)
    
    //console.log("Curr Date" , currDate.toDateString())
    //console.log("Next Date" , nextDate.toDateString())
    const f1 = query(foodColl, orderBy("Date", "asc"), 
    startAt(new Timestamp.fromDate(currDate)), 
    endBefore(new Timestamp.fromDate(nextDate)));

    //console.log("Curr Date", currDate.slice(0,4));
    //console.log("Next Date", nextDate);
    //fDate = query(foodColl, where("Date", "==", new Date(1659326400000)))
    useEffect(() => {
        async function fetchData() {
            const foodSnapshot = await getDocs(f1);
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

//onPress navigation feature to be added after static pages have been fully created 
    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {food}
        numColumns = {1}
        renderItem = {({item}) => (
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
                        <Text style= {styles.itemText}>{item["info"]["Average Rating"]}</Text>
                        {/* TO CHECK RATING != AVERAGE RATING <GetAveRating style= {styles.itemText} foodID={item["info"]["Food ID"]}/> */}
                    </View>
                    
                    </View> 
            </Pressable> 
        )} />
    )
}
export default GetData;

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