import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserInfoScreen from './screens/UserInfoScreen';

const Stack = createStackNavigator();

export default function UserInfoStack() {
  return (
    <Stack.Navigator headerShown = {false}>
      <Stack.Screen name='UserInfo' component={UserInfoScreen} />
    </Stack.Navigator>
  );
}