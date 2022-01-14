import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../assets/nom-nom-nom-color.jpg';

export default function Header() {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={logo}></Image>
      <Text style={styles.title}>Nom Nom Nom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: 'yellowgreen',
  },
  image: {
    width: 70,
    height: 100,
    marginRight: 10,
  },
  title: { marginLeft: 10, color: 'green', fontSize: 70, textAlign: 'center' },
});
