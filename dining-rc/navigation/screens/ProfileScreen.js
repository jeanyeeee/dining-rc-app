import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileNavigate from '../ProfileNav';
import AuthStack from '../AuthNavigation';
//
const ProfileScreen  = ({navigation}) => {
    return(
      <View style={styles.container}>
            <ProfileNavigate/>
      </View>

    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1
  },
})

