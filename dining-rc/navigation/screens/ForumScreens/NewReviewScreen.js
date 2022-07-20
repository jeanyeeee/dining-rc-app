import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { async } from '@firebase/util';
import {db} from '../../../firebase';
import { doc, collection, getDocs , getDoc, query, where, orderBy} from 'firebase/firestore';
import { FlatList,StyleSheet, Text, View, Pressable} from 'react-native';
import { ButtonComponent, InputField, ErrorMessage } from '../../../components';
import { getAuth } from 'firebase/auth';
import GetImage from '../../../ui/ImagePicker';

const auth = getAuth();
export default function NewReviewScreen({ navigation }) {
    const [food, setFood] = useState([]);
    const foodColl = collection(db, "DiningFood")
    const f1 = query(foodColl, orderBy("Stall Name", "asc"));
    //TO DO: show today only food
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

  //create a dropdown of the food that date menu served
  //using react-native-material-dropdown or 
  //just a new page
  //choosing the dish -> 

  return(
    <View style = {{backgroundColor: "white"}}>
        <Text style = {styles.topText}>Choose A Dish</Text>
        <FlatList 
            style= {{height: '100%'}}
            data = {food}
            numColumns = {1}
            renderItem = {({item}) => (
                <Pressable 
                    style = {styles.pressable} 
                    onPress={() => {navigation.navigate('InputNewReview',
                    {
                        stallName: item["info"]["Stall Name"],
                        foodName: item["info"]["Food Name"],
                        foodID: item["info"]["Food ID"],
                        foodImage: item["info"]["Image"],
                        navigation: navigation,
                    })}}>
                    <View style = {styles.inner}>
                        <GetImage style= {styles.image} name = {item["info"]["Image"]}/>
                        <View style = {styles.innerText}>
                            <Text style= {styles.heading}>{item["info"]["Stall Name"]}</Text>
                            <Text style= {styles.itemText}>{item["info"]["Food Name"]}</Text>
                        </View>
                        
                        </View> 
                </Pressable> 
            )} />
    </View>
)
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
topText: {
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 20,
        textAlign: "center",
},
inner: {
    alignItems: "center",
    flexDirection: "row",
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