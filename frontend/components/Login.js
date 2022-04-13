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
    logo: {
        width: 240,
        height: 240,
    },
    center: {
        textAlign: 'center',
    }
  });

  const Login = (props) => {
    const[username, setUN] = React.useState(""); 
    const[password, setpass] = React.useState(""); 
    
    return (
        <View>
        <br></br>
        <Image
            style = {styles.logo}
            source={{uri: 'https://raw.githubusercontent.com/Zach-Clay/Challenge.me/main/images/logo.jpeg', }}
        />
        <br></br><br></br><br></br><br></br>
        <Title style={styles.center}> Login </Title>

        <TextInput 
        label = 'Username'
        value = {username}
        onChangeText = {(username) => setUN(username)}
        />

        <TextInput 
        label = 'Password'
        value = {password}
        onChangeText = {(password) => setpass(password)}
        />
{/*       
 This will need to be a dropdown Later on, also work on the submit button and shit  */}
    <br></br><br></br>
    <Button mode = "contained"> Login </Button>
    <br></br>
    <Text style={styles.center}>
        {"Don't have an account?"}
    </Text>
    <Button mode = "contained"> Register </Button> 
        </View>
    )
  };
export default Login; 
