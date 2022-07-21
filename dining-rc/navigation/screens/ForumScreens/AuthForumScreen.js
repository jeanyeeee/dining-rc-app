import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import GetForumReview from '../../../api/GetForumReview';
import { ButtonComponent } from '../../../components';

const AuthForumScreen  = ({navigation}) => {
  return(
    <View style= {styles.container}>
      <Text style= {styles.text}>Your Friends Say...</Text>
      {/*Load the reviews here */}
      <GetForumReview navigation={navigation}/>
      <View style={styles.bottomButton}>
        <ButtonComponent
          style = {styles.button}
          onPress={() => navigation.navigate('NewReview')}
          backgroundColor='#0B735F'
          title='Add Your Review'
          
          tileColor='#fff'
          titleSize={20}
          containerStyle={{
            marginBottom: 24
          }}
        />
      </View>
    </View> 
  );}



export default AuthForumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    
    color: "#0B735F",
    alignItems: "center",
  },
  bottomButton: {
    justifyContent:"flex-end",
    flex: 1,
    marginBottom: 20,
  },
  text:{
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  }
});