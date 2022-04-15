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
    }
  });

  const Login = ({navigation}) => {
    const[username, setUN] = React.useState(""); 
    const[password, setpass] = React.useState(""); 

    const loginFunction = () => {
        console.log("Login Pressed");

        // AXOIS CALL TO AUTHENTICATE THE USER
        //Authenticate before moving to next page

        //Move to home page
        navigation.navigate("Home");
    }

    const registerFunction = () => {
        //Move to register page
        navigation.navigate("Register");
    }

    const forgotPasswordFunction = () => {
        //Move to forgot password page
        navigation.navigate("ForgotPassword");
    }
    
    return (
        <View style={styles.container}>
        <br></br>
        <Image
            style = {styles.logo}
            source={{uri: 'https://raw.githubusercontent.com/Zach-Clay/Challenge.me/main/images/logo.jpeg', }}
        />
        <br></br>
        <Title style={styles.statement}> WHAT'S NEXT? </Title>
        <br></br><br></br><br></br><br></br>
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
{/*       
 This will need to be a dropdown Later on, also work on the submit button and shit  */}
    <br></br><br></br>
    <Button style={styles.button} labelStyle = {{fontWeight: 'bold'}} mode = "contained" onPress={loginFunction}> Login </Button>
    <br></br>
   
    <Text style={styles.center}>
        {"Don't have an account?"}
    </Text>
    <Button style = {styles.registerButton} labelStyle = {{color: "#265A92", fontWeight: 'bold'}} mode = "contained" onPress={registerFunction}> Register </Button> 
    <br></br>
    <Text style={{color:"blue", textAlign:"center"}} onPress={forgotPasswordFunction}>
        {"Forgot your Password?"}
    </Text>
    <br></br><br></br><br></br><br></br>
    </View>
    )
  };
export default Login; 
