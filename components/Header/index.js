import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
    );
}

export default Header;