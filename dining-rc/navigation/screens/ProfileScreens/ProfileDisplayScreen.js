import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getAuth } from 'firebase/auth';
import { ButtonComponent } from '../../../components';
import GetUserReview from '../../../api/GetUserPastReview';

//TODO: split name from email to display
const ProfileDisplayScreen  = ({navigation}) => {
   const auth = getAuth();
   //console.log("auth: ", auth);
   
   const viewPastReview = () => {
        navigation.navigate("PastReview");
   }

   const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

    return(
      <View style={styles.container}>
            {/*need to change to display user information */}
            <View style = {styles.imageContainer}>
              <Image
              source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03369196352685.5eac4787a9d49.jpg'}}
              style={styles.defaultImage} />
              <Text style = {styles.userEmail}>{auth.currentUser.email}</Text>
              <Text style = {styles.userReview}>Your Reviews: </Text>
            </View>
            <View style= {styles.Review}>
              <GetUserReview navigation={navigation}
              />
            </View>
            <View style= {styles.OptionOne}>
              <ButtonComponent
              style = {styles.button}
              onPress={handleSignOut}
              backgroundColor='#0B735F'
              title='Sign Out'
              
              tileColor='#fff'
              titleSize={20}
              containerStyle={{
                marginBottom: 24
              }}
              />
            </View>
      </View>

    )
}

export default ProfileDisplayScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultImage: {
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "pink"
  },
  userEmail: {
    fontSize: 20,
    top: 22,
    fontFamily: "Cochin"
  },
  userReview: {
    fontSize: 20,
    top: 22,
    fontFamily: "Cochin",
    paddingRight: 250,
    top: 35
  },
  OptionOne: {
    justifyContent:"flex-end",
    flex: 1,
    bottom: 0
  },
  Review: {
    justifyContent:"center",
    flex: 2,
    top: 10,
    left: 5,
  },
  bottomButton: {
    justifyContent:"flex-end",
    flex: 1,
    marginBottom: 20,
  },
  heading: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    flexDirection: 'row'
  },
})

