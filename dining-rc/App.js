import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../navigation/tabs';

// const App = () => {
  
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }

// export default App;

// export default function App() {
//    return (
//        <View style={styles.container}>
//          <StatusBar style="auto" />
//        </View>
//    );
// }


export default function App() {
  return (
    <Tabs /> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
