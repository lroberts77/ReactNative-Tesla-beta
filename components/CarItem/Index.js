import React from 'react';
import { View, Text, ImageBackground } from "react-native";
import StyledButton from '../StyledButton/Index';
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.car_container}>
        <ImageBackground
          source={image}
          style={styles.bg_image}
        />
        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}
            {' '}
            <Text style={styles.taglineCTA}>{taglineCTA}</Text>
            </Text>
        </View>
        <View style={styles.btns_container}>
            <StyledButton 
                type='primary'
                content={'Custom Order'}
                onPress={() => {
                    console.warn('Custom Order')
                }}
            />
            <StyledButton 
                type='secondary'
                content={'Available Inventory'}
                onPress={() => {
                    console.warn('Available Inventory')
                }}
            />
        </View>
      </View>
    );
};

export default CarItem;