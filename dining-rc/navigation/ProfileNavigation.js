import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import AuthStack from './AuthNavigation';
import UserInfoStack from './UserInfoStack';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export default function ProfileNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    async function userSetter(authenticatedUser) {
        try {
            await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
            setIsLoading(false);
          } catch (error) {
            console.log(error);
          }
    }
    const unsubscribeAuth = onAuthStateChanged(auth, userSetter);

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
      user ? <UserInfoStack/> : <AuthStack />
  );
}