//after signing in to the app
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserInfoScreen  = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <Text>Profile Page</Text>   
        </View>
    )
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    backgroundColor: "#DFE2E5",
    padding: 15,
    borderRadius: 15,
    margin: 100,
    marginHorizontal: 20
  },
});
