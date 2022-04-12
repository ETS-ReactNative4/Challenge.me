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
  import DropDown from 'react-native-paper-dropdown'; 

  const Register = (props) => {
    const [Fname, setFname] = React.useState("");
    const [Lname, setLname] = React.useState("");
    const [showDropDown, setShowDropDown] = React.useState(false);
    const[username, setUN] = React.useState(""); 
    const[password, setpass] = React.useState(""); 
    const[DOB, setDOB] = React.useState(""); 
    const[Gender, setGender] = React.useState(""); 
    const [confirmPass, setCP] = React.useState("");
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
    
    return (
        <View>
        <Title> Register your account </Title>
        <TextInput 
        label = 'First Name'
        value = {Fname}
        onChangeText = {(Fname) => setFname(Fname)}
        />

        <TextInput 
        label = 'Last Name'
        value = {Lname}
        onChangeText = {(Lname) => setLname(Lname)}
        />

        <TextInput 
        label = 'Username'
        value = {username}
        onChangeText = {(username) => setUN(username)}
        />

        <TextInput 
        label = 'password'
        value = {password}
        onChangeText = {(password) => setpass(password)}
        />
      <TextInput 
      label = 'confirm password'
      value = {confirmPass}
      onChangeText = {(confirmPass) => setCP(confirmPass)}
      />
{/*       
 This will need to be a dropdown Later on, also work on the submit button and shit  */}
      <List.Accordion
      title = "Gender"
      expanded = {showDropDown}
      onPress = {setShowDropDown}
      >
          <List.Item title = "Male" />
          <List.Item title = "Female" /> 
          <List.Item title = "Other" /> 

      </List.Accordion>

    <Button mode = "contained"> Create Account </Button> 
        </View>
    )
  };
export default Register; 
