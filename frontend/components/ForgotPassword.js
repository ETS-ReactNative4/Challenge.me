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
    Image,
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
        width: 200,
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
    }
  });

  const Login = (props) => {
    const[username, setUN] = React.useState(""); 
    const[DOB, setDOB] = React.useState("");
    const[password, setpass] = React.useState(""); 
    const [confirmPass, setCP] = React.useState("");; 
    
    return (
        <View style={styles.container}>
        <br></br>
        <br></br>
        <Title style={styles.statement}> FORGOT PASSWORD? </Title>
        <br></br><br></br><br></br><br></br>
        <TextInput style={styles.inputBox}
        label = 'Username'
        value = {username}
        onChangeText = {(username) => setUN(username)}
        />

        <TextInput style={styles.inputBox}
        label = 'Date of Birth'
        value = {DOB}
        onChangeText = {(DOB) => setDOB(DOB)}
        />

        <TextInput style={styles.inputBox} secureTextEntry={true}
        label = 'New Password'
        value = {password}
        onChangeText = {(password) => setpass(password)}
        />
      <TextInput style={styles.inputBox} secureTextEntry={true}
      label = 'Confirm New Password'
      value = {confirmPass}
      onChangeText = {(confirmPass) => setCP(confirmPass)}
      />
{/*       
 This will need to be a dropdown Later on, also work on the submit button and shit  */}
    <br></br><br></br>
    <Button style={styles.button} labelStyle = {{fontWeight: 'bold'}} mode = "contained"> RESET PASSWORD </Button>
    <br></br>
    <Button style = {styles.registerButton} labelStyle = {{color: "#265A92", fontWeight: 'bold'}} mode = "contained"> BACK </Button> 
    <br></br>
    <br></br><br></br><br></br><br></br>
    </View>
    )
  };
export default Login; 
