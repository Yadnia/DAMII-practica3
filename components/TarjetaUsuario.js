import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TarjetaUsuario = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{props.nombre}</Text>
            <Text style={styles.edad}>{props.edad}</Text>
            <Text style={styles.email}>{props.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        margintop: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        fontSize: 18,  
        fontWeight: "bold",
    },
    email: {
        fontSize: 16,
        color: "#666",
    },
});

export default TarjetaUsuario;