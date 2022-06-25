import { async } from '@firebase/util';
import { doc, getFirestore, collection, getDocs , getDoc, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import GetRating from './DisplayRating';
import GetImage from '../ui/ImagePicker';
import * as RootNavigation from '../navigation/RootNavigation';

//TODO: Need to include ratings too
//TODO: onPress -> go to rating page w only the food item
const GetData = () => {
    const [food, setFood] = useState([]);
    const foodColl = collection(db, "DiningFood");

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

//onPress navigation feature to be added after static pages have been fully created 
    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {food}
        numColumns = {1}
        renderItem = {({item}) => (
            <Pressable style = {styles.pressable} onPress={() => {RootNavigation.navigate('Dish', {foodId: item["info"]["Food ID"]})}}>
                <View style = {styles.inner}>
                    <GetImage style= {styles.image} name = {item["info"]["Image"]}/>
                    <View style = {styles.innerText}>
                        <Text style= {styles.heading}>{item["info"]["Food ID"]}</Text>
                        <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                        <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text>
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
    },
    innerText: {
        flexDirection: "column",
        marginLeft: 20, 
    }
})