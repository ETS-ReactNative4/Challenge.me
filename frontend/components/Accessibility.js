import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  CheckBox,
} from 'react-native';
import {
  Title,
  Button,
} from 'react-native-paper';

//API Client
import axios from "axios";

const Accessibility = () => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  const updateAccessibility = () => {
    console.log('Box 1: ', isSelected1);
    console.log('Box 2: ', isSelected2);

    //POST TO THE BACKEND WITH AXIOS
    
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Accessibility Settings</Title>
      
      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Can you perform physical activities using your legs?</Text>
      </View>


      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Can you perform physical activities using your arms?</Text>
      </View>

      <Button mode="contained" onPress={updateAccessibility}>Update</Button>

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
  title: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default Accessibility;