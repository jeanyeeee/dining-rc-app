import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native'
import { Ionicons  } from '@expo/vector-icons';
import React from 'react';
//For the Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import DishScreen from './screens/DishScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 
          'cart' : 
          'cart-outline';
        } else if (route.name === 'Dish') {
          iconName = focused ? 
          'cafe' : 
          'cafe-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 
          'person' : 
          'person-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={30} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'black',
    })}
  >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Dish" component={DishScreen}></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTab;


