import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import DishScreen from './screens/DishScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
      <Tab.Screen name="Dish" component={DishScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTab;