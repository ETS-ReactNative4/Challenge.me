import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';

// React Navigation
import RootStack from "./navigators/RootStack"

//Components
import Register from "./components/Register.js"; 
import Accessibility from './components/Accessibility.js';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login.js';
import Home from './components/Home.js';

export default function App() {
  return (
    <RootStack />
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
