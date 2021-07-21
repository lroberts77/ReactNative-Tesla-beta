import React from 'react';
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from './styles';

const StyledButton = () => {
    return (
        <View >
            <Pressable style={styles.btn} onPress={() => {
                console.warn( 'Heyyyy' );
            }}>
                <Text>custon btn</Text>
            </Pressable>
      </View>
    );
};

export default StyledButton;