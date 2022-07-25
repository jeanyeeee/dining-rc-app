import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {InputField, ButtonComponent, ErrorMessage } from '../../components'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [signupError, setSignupError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);

        }).catch(
          error => {
            if (error.code === 'auth/email-already-in-use') { // for sign up
              console.log('That email address is already in use!');
              setSignupError('Email address is already in use');
            }
        
            if (error.code === 'auth/invalid-email') { //email input not correct form
              console.log('That email address is invalid!');
              setSignupError('Email address is invalid');
            }

            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') { //invalid user
              console.log('Invalid email or password');
              setSignupError('Invalid email or password');
            }

            if (error.code === 'auth/weak-password') { //weak password
              console.log('Password should be at least 6 characters');
              setSignupError('Password should be at least 6 characters');
            }
        
            console.error(error);
          }
        )
      } else {
        if (email === '') {
          console.log('Please enter your email');
          setSignupError('Please enter your email');
        } else {
          console.log('Please enter your password');
          setSignupError('Please enter your password');
        }
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Sign Up</Text>
      <Text style = {styles.smallText}>Welcome friend, enter your details to start eating at the Dining Hall.</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='email'
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='lock'
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <ButtonComponent
        onPress={onHandleSignup}
        backgroundColor='#0B735F'
        title='Sign Up'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      <Button
        onPress={() => navigation.navigate('Login')}
        title='Go to Login'
        color='#2A3037'
      />
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
  title: {
    margin:20,
    fontSize: 24,
    fontWeight: '600',
    color: '#2A3037',
  },
  smallText: {
    marginHorizontal: 20,
    marginBottom: 20, 
    color: '#2A3037',
    fontSize: 16,
  }
});