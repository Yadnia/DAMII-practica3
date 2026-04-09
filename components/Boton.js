import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Boton = (props) => {
return(
    <TouchableOpacity style={[styles.boton, {backgroundColor : props.color}]}>
        <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
);

};

const styles = StyleSheet.create({
    boton: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    texto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Boton;
