import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo';
import TarjetaUsuario from './components/TarjetaUsuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo nombre="Juan" />
      <Saludo nombre="Axel" />
      <Saludo nombre="Danieska" />
      <Saludo nombre="Marylin" />
      <Saludo nombre = "Nahomy" />

      <TarjetaUsuario nombre="Yadnia Baltodano" edad="20" email="yadnia.baltodano@example.com" />
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
