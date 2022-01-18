import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import logo from '../assets/nomnomnom-logo.png';

export default function Landing() {
  return (
    <>
      <View style={styles.page}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>This is a landing page</Text>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.googleButton} title="Google" color={'white'} />
        <Button style={styles.appleButton} title="Apple" color={'white'} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 2,
    backgroundColor: 'rgb(255,81,89)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    borderColor: 'red',
    borderWidth: 5,
    width: 200,
    height: 200,
  },
  text: {
    color: 'white',
  },
  buttons: {
    flex: 1,
    backgroundColor: 'rgb(255,81,89)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
