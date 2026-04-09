import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Perfil = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{props.nombre}</Text>
            <Text style={styles.profesion}>{props.profesion}</Text> 
            <Image source={{ uri: props.foto }} style={styles.foto} />
        </View>
    )
    ;
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
    nombre: {
        fontSize: 18,
        fontWeight: "bold",
    },
    profesion: {
        fontSize: 16,
        color: "#666",
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
});

export default Perfil;