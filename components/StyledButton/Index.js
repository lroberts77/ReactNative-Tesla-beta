import React from 'react';
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;

    const content = props.content;
    const onPress = props.onPress;
    const bgColor = type === 'primary' ? 'dimgrey' : 'lightgrey';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.btn, { backgroundColor: bgColor }]} 
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;