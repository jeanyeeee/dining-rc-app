import { StatusBar } from 'expo-status-bar';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import InputField from '../../components/InputField'
import ErrorMessage from '../../components/ErrorMessage'

const auth = getAuth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style= {styles.container} behavior="padding">
    <ScrollView>
      <Text style={styles.title}>Login Page Start</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 50
        }}
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
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry = {true}
        textContentType='password'
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {loginError ? <ErrorMessage error= {loginError} visible={true} /> : null}
      <ButtonComponent  //this is component
        onPress={onLogin}
        backgroundColor='#f57c00' //colour of the login button
        title='Login'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      <Button
        onPress={() => navigation.navigate('Signup')}
        title='Go to Sign Up'
        color='#000000'
      />
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});