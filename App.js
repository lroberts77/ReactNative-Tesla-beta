import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, NativeModules } from 'react-native';
import CarItem from './components/CarItem/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={"Model S"} 
        tagline={"Starting from £87,980"} 
        taglineCTA={"Order online for touchless delivery"}
        image={require('./assets/images/ModelS.jpeg')} 
      />
      <StatusBar style="auto" />
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
