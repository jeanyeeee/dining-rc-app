import { async } from '@firebase/util';
import {collection, getDocs , query,orderBy, startAt, endBefore, Timestamp, where} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetImage from '../ui/ImagePicker';
import * as RootNavigation from '../navigation/RootNavigation';
import GetAveRating from '../ui/GetAveRating';
import DishComponent from '../components/DishComponent';

//TODO: Need to include ratings too
//TODO: onPress -> go to rating page w only the food item
const GetDishList = ({navigation, currDate, nextDate}) => {
    //console.log("Curr Date" , currDate.toDateString())
    //console.log("Next Date" , nextDate.toDateString())

    const [food, setFood] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const foodColl = collection(db, "DiningFood")
    const f1 = query(foodColl, 
    orderBy("Date", "asc"),
    orderBy("Average Rating", "desc"),
    startAt(new Timestamp.fromDate(currDate)),
    endBefore(new Timestamp.fromDate(nextDate)));

    //start + 82800 = 12:00
    // const f1 = query(foodColl, 
    //     orderBy("Date", "asc"),
    //     orderBy("Average Rating", "desc"),
    //     startAt(new Timestamp.fromDate(currDate)),
    //     endBefore(new Timestamp.fromDate(nextDate)));

    const onRefresh = async () => {
        setIsFetching(true);
        setTimeout(() => {setIsFetching(false)}, 2000);
      };

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
}, [f1])    

//onPress navigation feature to be added after static pages have been fully created 
    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {food}
        onRefresh={onRefresh}
        refreshing={isFetching}
        numColumns = {1}
        renderItem = {({item}) => (
            <DishComponent id = {item["id"]} item = {item} navigation = {navigation}/>
        )} />
    )
}
export default GetDishList;

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