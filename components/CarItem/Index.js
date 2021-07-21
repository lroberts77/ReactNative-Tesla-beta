import React from 'react';
import { View, Text, ImageBackground } from "react-native";
import StyledButton from '../StyledButton/Index';
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.car_container}>

        <ImageBackground
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.bg_image}
        />
        <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting from £87,980</Text>
        </View>
        <View>
            <StyledButton />
        </View>
      </View>
    );
};

export default CarItem;