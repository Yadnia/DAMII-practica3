import React from 'react';

const Saludo = (props) => {
    return (
        <View>
            <Text>Hola {props.nombre}!</Text>
        </View>
    )
}

export default Saludo;