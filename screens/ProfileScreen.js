import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const ProfileScreen  = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <Text onPress={() => navigation.navigate('Home')}>Profile Page, Press To Go Home</Text> 

        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
