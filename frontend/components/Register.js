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
  import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
  } from '@mui/material';

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
    const[username, setUN] = React.useState(""); 
    const[password, setpass] = React.useState(""); 
    const[Gender, setGender] = React.useState(""); 
    const [confirmPass, setCP] = React.useState("");;
    const handleChange = (event) => {
      setGender(event.target.value);
    };

    const registerButton = () => {
      const data = { 
        firstName:  Fname,
        lastName: Lname,
        username: username,
        password: password,
        dateOfBirth: DOB,
        gender: Gender,
        accessibilitySettingsIds: [],
      }
      
      if(data.password != confirmPass){
        err
      }

      navigation.navigate("Login");
    }

    const areThingsNull = () => {
      return(
        firstname === '' && lastname === '' && username === '' && password === '' && Gender === ''
      ) 
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
      
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          value={Gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Non-Binary</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br></br><br></br>

    <Button style = {styles.button} labelStyle = {{fontWeight: 'bold'}} disabled = {password == confirmPass? false:true }mode = "contained" onPress={registerButton}> REGISTER </Button> 
    
    </View>
    )
  };
export default Register; 
