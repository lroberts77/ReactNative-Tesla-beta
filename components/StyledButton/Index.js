import React from 'react';
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;

    const bgColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.btn, {backgroundColor: bgColor}]} onPress={() => {
                console.warn( 'Heyyyy' );
            }}>
                <Text style={[styles.text, { color: textColor}]}>custon btn</Text>
            </Pressable>
      </View>
    );
};

export default StyledButton;