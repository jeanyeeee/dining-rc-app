import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const DishScreen  = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <Text onPress= {() => navigation.navigate('Home')}>Dish Details Page, Press Here To Go Home</Text> 

        </View>
    )
}

export default DishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
