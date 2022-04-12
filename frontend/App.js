import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from "./components/Register.js"; 
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
export default function App() {
  //const [view, setView] = useState("register");
  return (
    <View style={styles.container}>
      <Register />
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
