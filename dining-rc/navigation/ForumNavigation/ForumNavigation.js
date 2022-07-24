import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthenticatedUserContext } from '../AuthenticatedUserProvider';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import NotAuthForumStack from './NotAuthForumStack';
import AuthForumStack from './AuthForumStack';

const auth = getAuth();

export default function ForumNavigator(navigation) {
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
    /*to test the AuthForumStack, delete the Not*/
    /*have not test whether have to re-login to create new review */
    user ? <AuthForumStack/> : <NotAuthForumStack />
  );
}