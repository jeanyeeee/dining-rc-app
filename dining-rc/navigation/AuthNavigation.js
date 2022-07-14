import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelloLoginScreen from './screens/HelloLoginScreen';
import HelloSignUpScreen from './screens/HelloSignUpScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Stack = createStackNavigator();

export default function AuthStack() {   
  return (
    <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen options= {{headerShown: false}} name='Login' component={HelloLoginScreen} />
          <Stack.Screen options= {{headerShown: false}} name='Signup' component={HelloSignUpScreen} /> 
        </Stack.Navigator>
      </SafeAreaProvider>

  );
}

