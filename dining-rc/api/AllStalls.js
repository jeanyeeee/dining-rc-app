import { doc, getFirestore, collection, getDocs , getDoc, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

//TODO: Keep as follows, need to group by stall name in flatlist

const GetStalls = () => {
    const [food, setFood] = useState([]);
    const foodColl = collection(db, "DiningFood");

    useEffect(() => {
        async function fetchData() {
            const foodSnapshot = await getDocs(foodColl);
            const foods = [];
            //for each food in the list
            const foodList = foodSnapshot.docs.map(doc => {
               //console.log("Data is", doc.data())
               const obj = doc.data();
               foods.push({
                id: doc.id,
                info: obj
               })
               })
        //console.log(foods);
        setFood(foods)
    }
    fetchData();
}, [])    

    return(
        <FlatList 
        style= {{height: '100%'}}
        data = {food}
        numColumns = {1}
        renderItem = {({item}) => (
            <Pressable style = {styles.pressable}>
                <View style = {styles.inner}>
                    <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                    <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text> 
                </View> 
            </Pressable> 
        )} />
    )
}
export default GetStalls;

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