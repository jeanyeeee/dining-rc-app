import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileNavigate from '../ProfileNav';
import AuthStack from '../AuthNavigation';
import { getAuth } from 'firebase/auth';
import { ButtonComponent } from '../../components';
import { FieldValue } from 'firebase/firestore';
//
const ProfileScreen  = ({navigation}) => {
   const auth = getAuth();
   console.log("auth: ", auth);
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
            <Text>User profile here!</Text>
            <View style= {styles.bottomButton}>
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

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1
  },
  bottomButton: {
    justifyContent:"flex-end",
    flex: 1,
    marginBottom: 20,
  },
})

