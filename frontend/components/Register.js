import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextBase,
    useColorScheme,
    View,
  } from 'react-native';
  import {
    Title,
    TextInput,
    Button,
    List,
  } from 'react-native-paper';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 240,
        height: 240,
        borderRadius: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        textAlign: 'center',
    },
    statement: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#163869',
    },
    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#265A92',
        borderColor: '#265A92',
        boxShadow: "4px 4px 5px lightblue",
        width: 150,
    },
    registerButton: {
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#265A92',
        boxShadow: "4px 4px 5px lightblue",
        width: 150,
    },
    inputBox: {
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#999999',
        boxShadow: "4px 4px 5px lightblue",
        marginBottom: 10,
    },
    dropdownBox: {
      backgroundColor: '#FFFFFF',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#999999',
      boxShadow: "4px 4px 5px lightblue",
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999999',
},
row: {
  flex: 1,
  flexDirection: 'row',
},
  });

import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:25484'
})

  const Register = ({navigation}) => {
    const [Fname, setFname] = React.useState("");
    const [Lname, setLname] = React.useState("");
    const [showDropDown, setShowDropDown] = React.useState(false);
    const[username, setUN] = React.useState(""); 
    const[password, setpass] = React.useState(""); 
    const[DOB, setDOB] = React.useState(""); 
    const[Gender, setGender] = React.useState(""); 
    const [confirmPass, setCP] = React.useState("");;
    const GenderList = [
      {
        label: "Male",
        value: 0
      },
      {
        label: "Female",
        value: 1
      }, 
      {
        label: "Other",
        value: 2
      },
    ];

    const nextFunction = () => {
      //Data from form
      const data = { 
        firstName:  Fname,
        lastName: Lname,
        username: username,
        password: password,
        dateOfBirth: DOB,
        gender: Gender,
        accessibilitySettingsIds: [],
      }

      const sendRequest = async () => {
        try {
          const res = await api.post('http://localhost:25484/user', data);
          console.log(res.data);
          //Move to next page
          navigation.navigate("Accessibility");
        } catch (e) {
          alert(e);
        }
      }
      //AXIOS CALL TO POST INFO
      sendRequest(); 
    }
    
    return (
        <View style={styles.container}>
        <Title style = {styles.statement}> CREATE YOUR ACCOUNT </Title>
        <br></br>
        <TextInput style={styles.inputBox}
        label = 'First Name'
        value = {Fname}
        onChangeText = {(Fname) => setFname(Fname)}
        />

        <TextInput style={styles.inputBox}
        label = 'Last Name'
        value = {Lname}
        onChangeText = {(Lname) => setLname(Lname)}
        />

        <TextInput style={styles.inputBox}
        label = 'Username'
        value = {username}
        onChangeText = {(username) => setUN(username)}
        />

        <TextInput style={styles.inputBox} secureTextEntry={true}
        label = 'Password'
        value = {password}
        onChangeText = {(password) => setpass(password)}
        />
      <TextInput style={styles.inputBox} secureTextEntry={true}
      label = 'Confirm Password'
      value = {confirmPass}
      onChangeText = {(confirmPass) => setCP(confirmPass)}
      />

{/*       
 This will need to be a dropdown Later on, also work on the submit button and shit  */}
      
      
      <List.Accordion style={styles.dropdownBox}
      title = "Gender"
      expanded = {showDropDown}
      onPress = {setShowDropDown}
      >
          <List.Item style={styles.listItem} title = "Male" />
          <List.Item style={styles.listItem} title = "Female" /> 
          <List.Item style={styles.listItem} title = "Other" /> 

      </List.Accordion>

    <br></br><br></br>

    <Button style = {styles.button} labelStyle = {{fontWeight: 'bold'}} mode = "contained" onPress={nextFunction}> NEXT </Button> 
    
    </View>
    )
  };
export default Register; 
