import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './Components/carItems/index'
import CarsList from './Components/CarsList/index';
import Header from './Components/Header/index'
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
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
