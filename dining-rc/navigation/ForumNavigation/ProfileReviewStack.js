import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PastReviewScreen from '../screens/ProfileScreens/UserPastReviewScreen';
import ProfileDisplayScreen from '../screens/ProfileScreens/ProfileDisplayScreen';
import EditScreen from '../screens/ProfileScreens/EditScreen';

const Stack = createStackNavigator();

//
export default function ProfileReviewStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator headerShown = {false}>
      <Stack.Screen options= {{headerShown: false}} name='ProfileDisplay' component={ProfileDisplayScreen} />
      <Stack.Screen options= {{headerShown: false}} name='PastReview' component={PastReviewScreen} />
      <Stack.Screen options= {{headerShown: false}} name='EditScreen' component={EditScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
    
  );
}

