import { doc, getFirestore, collection, getDocs , startAt, endBefore, Timestamp, query, where, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import DishComponent from '../components/DishComponent';
//TODO: Keep as follows, need to group by stall name in flatlist

const GetStalls = ({navigation, currDate, nextDate}) => {
    const [food, setFood] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const foodColl = collection(db, "DiningFood")
    const f1 = query(foodColl, 
    orderBy("Date", "asc"),
    startAt(new Timestamp.fromDate(currDate)),
    endBefore(new Timestamp.fromDate(nextDate)));

    const onRefresh = async () => {
        setIsFetching(true);
        setTimeout(() => {setIsFetching(false)}, 2000);
      };
      
  useEffect(() => {
         function fetchData() {
            const foodSnapshot = await getDocs(f1);
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
        sortingArray(foods);
        setFood(foods)
    }
    fetchData();
}, [f1])    

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
export default GetStalls;

const sortingArray = (array) => {
    array.sort((a,b) => {
        return a["info"]["Stall ID"] - b["info"]["Stall ID"];
    });
    return(array)
}

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