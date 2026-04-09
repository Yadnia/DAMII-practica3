import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo';
import TarjetaUsuario from './components/TarjetaUsuario';
import Producto from './components/Producto';
import Boton from './components/Boton';
import Perfil from './components/Perfil';

export default function App() {

    const productos =[
    { id: 1, nombre: "Producto 1", precio: "$10" },
    { id: 2, nombre: "Producto 2", precio: "$20" },
    { id: 3, nombre: "Producto 3", precio: "$30" },
    ]

  return (
    <View style={styles.container}>
      <Saludo nombre="Juan" />
      <Saludo nombre="Axel" />
      <Saludo nombre="Danieska" />
      <Saludo nombre="Marylin" />
      <Saludo nombre = "Nahomy" />
      <TarjetaUsuario nombre="Yadnia Baltodano" edad="20" email="yadnia.baltodano@example.com" />

    {productos.map((producto) => (
    <Producto
      key={producto.id}
      nombre={producto.nombre}
      precio={producto.precio}
    />
  ))}

      <Boton texto="Hola, tocame" color="#007bff" />
      <Boton texto="Adios, tocame" color="#dc3545" />
    <Perfil nombre="María Benavidez" profesion="Desarrolladora de Software" foto="https://www.shutterstock.com/image-photo/profile-portrait-successful-cheerful-company-260nw-2319601793.jpg" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 20,
  
  },
});
