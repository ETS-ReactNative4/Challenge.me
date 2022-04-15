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

const Accessibility = ({navigation}) => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  const updateAccessibility = () => {
    console.log('Box 1: ', isSelected1);
    console.log('Box 2: ', isSelected2);
    console.log('Box 3: ', isSelected3);

    //POST TO THE BACKEND WITH AXIOS


    //Move to homescreen
    navigation.navigate("Home");
  }

  return (
    <View style={styles.statement}>

      <View style={styles.centerView}>
        <Title style={styles.statement}>ACCESSIBILITY SETTINGS</Title><br></br>
      </View>

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

      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you have access to a car?</Text>
      </View>

      <View styles={styles.centerView}>
        <Button style = {styles.button} mode="contained" onPress={updateAccessibility}>Finish</Button>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
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
  button: {
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#265A92',
    borderColor: '#265A92',
    boxShadow: "4px 4px 5px lightblue",
    width: 150,
    left: 100,
  },
  statement: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#163869',
},
  centerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Accessibility;