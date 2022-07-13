import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserInfoScreen from './screens/UserInfoScreen';
import HelloHomeScreen from './screens/HelloHomeScreen';

const Stack = createStackNavigator();

export default function UserInfoStack() {
  return (
    <Stack.Navigator headerShown = {false}>
      { /* <Stack.Screen name='UserInfo' component={UserInfoScreen} /> */}
      <Stack.Screen options= {{headerShown: false}} name='Hello Home Screen' component={HelloHomeScreen} />
    </Stack.Navigator>
  );
}