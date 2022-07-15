import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AuthForumScreen from '../screens/ForumScreens/AuthForumScreen';
import InputNewReviewScreen from '../screens/ForumScreens/InputNewReviewScreen';
import NewReviewScreen from '../screens/ForumScreens/NewReviewScreen';
const Stack = createStackNavigator();

//This is for logged in user, enable create new review
export default function AuthForumStack() {   
  return (
    <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen options= {{headerShown: false}} name='AuthForum' component={AuthForumScreen} /> 
          <Stack.Screen options= {{headerShown: false}} name='NewReview' component={NewReviewScreen} />
          <Stack.Screen options= {{headerShown: false}} name='InputNewReview' component={InputNewReviewScreen} /> 
        </Stack.Navigator>
      </SafeAreaProvider>

  );
}