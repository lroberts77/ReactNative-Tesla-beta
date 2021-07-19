import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.car_container}>

        <ImageBackground
          source={require('./assets/images/ModelS.jpeg')}
          style={styles.bg_image}
        />
        <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting from £87,980</Text>
        </View>
      </View>

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
  car_container: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 18,
    color: 'grey',
  },
  bg_image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});
