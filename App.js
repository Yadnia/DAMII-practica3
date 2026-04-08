import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo nombre="Juan" />
      <Saludo nombre="Axel" />
      <Saludo nombre="Danieska" />
      <Saludo nombre="Marylin" />
      <Saludo nombre = "Nahomy" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
