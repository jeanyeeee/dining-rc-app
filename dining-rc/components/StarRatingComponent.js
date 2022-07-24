import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
//able to select the ratings

const StarRatingComponent = () => {
    //default rating is the actual rating
    const [defaultRating, setDefaultRating ] = useState(2);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

    const fullStar = require("../images/star_filled.png"); 
    const noStar = require("../images/star_corner.png");

    const CustomRatingBar = () =>{
    return(
        <View style={styles.customRatingBar}>
            {
                maxRating.map((item, key) => {
                    return(
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key= {item}
                        onPress = {() => setDefaultRating(item)}  
                        >
                        
                        <Image
                        style = {styles.starImage}
                        source = {
                            item <= defaultRating
                            ? fullStar
                            : noStar
                        }
                        />

                      </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
  return (
    <View>
      {/*Show the star rating */}
      <CustomRatingBar />
    {/*Show the text*/}
      <Text>
        {/* {defaultRating + '/' + maxRating.length} */}
      </Text>
    {/*Change this to changing default rating in the database instead */}
    </View>
  )
}

export default StarRatingComponent

const styles = StyleSheet.create({
    customRatingBar: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
    },
    starImage: {
        width: 40,
        height: 40,
        resizeMode: "cover",
    },

    buttonStyle: {
        justifyContent:"center",
        alignItems:"center",
    }


})