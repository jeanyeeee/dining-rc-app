import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/tabs';
import {LogBox, View, StyleSheet} from 'react-native';
import { navigationRef } from './navigation/RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProfileNavigate from './navigation/ProfileNav';

const App = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

  return(
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {/*change from BottomTab to profileNavigate */}
            <ProfileNavigate />
            <View style= {styles.container}>
            </View>
        </NavigationContainer>
      </SafeAreaProvider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
  }
}
)