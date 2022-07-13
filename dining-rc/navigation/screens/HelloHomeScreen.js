import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { AuthenticatedUserContext } from '../AuthenticatedUserProvider';
import { IconButton } from '../../components';

const auth = getAuth();

const HelloHomeScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name='logout'
          size={24}
          color='#fff'
          onPress={handleSignOut}
        />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2A3037'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#2A3037'
  }
});

export default HelloHomeScreen

