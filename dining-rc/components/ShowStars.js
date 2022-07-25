import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
const ShowStars = ({rating}) => {
    //we will round up the rating to a whole number
    const defaultRating = Math.floor(rating);
    //console.log(defaultRating)
    const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

    const fullStar = require("../images/star_filled.png"); 
    const noStar = require("../images/star_corner.png");

    //take the defaultrating and map to it


  return (
    <View style={styles.customRatingBar}>
            {
                maxRating.map((star, key) => {
                    return(
                        <Image
                        key= {star}
                        style = {styles.starImage}
                        source = {
                            star <= defaultRating ? fullStar : noStar
                        }
                        />
                    )
                })
            }
        </View>

  )
}

export default ShowStars

const styles = StyleSheet.create({
    customRatingBar: {
        justifyContent: "left",
        flexDirection: "row",
        
    },
    starImage: {
        width: 20,
        height: 20,
        resizeMode: "cover",
    },

})