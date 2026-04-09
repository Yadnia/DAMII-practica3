import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Saludo = (props) => {
    return (
        <View>
            <Text>Hola {props.nombre}!</Text>
        </View>
    )
}

export default Saludo;