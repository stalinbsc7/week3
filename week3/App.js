import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import AppButton from './components/AppButton';
// import color from '../App/app/colors/Config';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import Listingitems from './components/ListingItems';
import AccountScreen from './screens/AccountScreen';
import Icons from './components/Icon';
import ListingScreen from './screens/ListingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginButton /> */}
      {/* <AppButton title='click here' color={color.primary} /> */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Card title='Red Jacket for Sale!' subtitle='$100'/> */}
       <AccountScreen />
       {/* <ListingScreen /> */}
       {/* <Icons name='email' size={40} color='blue'  /> */}
          {/* <ListingDetailsScreen /> */}
          {/* <Listingitems  image={require('./assets/jacket.jpg')} title='iswarya ravikumar' subtitle='iswaryaravikumar415@gmil.com'/> */}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

