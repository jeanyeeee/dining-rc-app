import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const CartScreen  = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <Text onPress={() => navigation.navigate('Home')}>Cart Page, Press To Go Home</Text>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
