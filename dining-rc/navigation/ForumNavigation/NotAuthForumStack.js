import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotAuthForumScreen from '../screens/ForumScreens/NotAuthForumScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

//for not log in user, disable create new review
export default function NotAuthForumStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator headerShown = {false}>
      <Stack.Screen options= {{headerShown: false}} name='NotAuthForum' component={NotAuthForumScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
    
  );
}

