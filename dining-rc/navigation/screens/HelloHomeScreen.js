import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import { getAuth } from 'firebase/auth';
import { AuthenticatedUserContext } from '../AuthenticatedUserProvider';
import {ButtonComponent} from '../../components';
const auth = getAuth();
const breakfastCredits = 180;
const dinnerCredits = 180;

const HelloHomeScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/*Take in the data from the database */}
        <Text style={styles.title}>Hello, {user.email}!</Text>
        </View>
        {/*Middle */}
        <Text style= {[styles.title, {paddingBottom: 20}]}>Meal Credits</Text>
        <View style=  {{flexDirection: "row", width: '100%', justifyContent: "space-between"}}>
          <View style=  {{flexDirection: "column"}}>
            <Text style = {styles.biggerText}>Breakfast</Text>
            <Text style = {styles.biggerText}>Dinner</Text>
          </View>
          <View style=  {{flexDirection: "column"}}>
            {/* Replace with the users credits */}
            <Text style = {[styles.biggerText, {fontWeight: "bold"}]}>{breakfastCredits}</Text>
            <Text style = {[styles.biggerText, {fontWeight: "bold"}]} >{dinnerCredits}</Text>
          </View>
        </View>
        {/* 
        <View style = {{paddingTop: 20}}>
          <Text style= {[styles.title, {paddingBottom: 20}]}>Account</Text>
          <Text style= {styles.biggerText}>Email Address</Text>
          <View>
            <Button 
            title= {user.email}
            style = {styles.buttonOutline}>
            </Button>
          </View>

        
        </View>
        
        */}

        {/*Button Bottom */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2A3037'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#2A3037'
  },
  biggerText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#2A3037'
  },
  buttonOutline:{
    flex: 1,
    alignItems: "center",
    colour: "#FCFCFC",
    borderRadius: 20,
    borderColor: "#2A3037"
  },
  button:{
    flex: 1,
    color: "#0B735F",
    alignItems: "center"
    
  },
  bottomButton: {
    justifyContent:"flex-end",
    flex: 1,
    marginBottom: 20,
  }

});

export default HelloHomeScreen

