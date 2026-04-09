import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Producto = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{props.nombre}</Text>
            <Text style={styles.precio}>{props.precio}</Text>
        </View>
    )
    ;
};

const styles = StyleSheet.create({
    card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    },
    nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    precio: {
    fontSize: 16,
    },
});

export default Producto;