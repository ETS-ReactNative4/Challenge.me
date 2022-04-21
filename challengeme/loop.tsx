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
  } from 'react-native-paper';
  import DropDown from 'react-native-paper-dropdown'; 
interface IRegisterProps {} 

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
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
        onChangeText = {(Fname:string) => setFname(Fname)}
        />

        <TextInput 
        label = 'Last Name'
        value = {Lname}
        onChangeText = {(Lname:string) => setLname(Lname)}
        />

        <TextInput 
        label = 'Username'
        value = {username}
        onChangeText = {(username:string) => setUN(username)}
        />

        <TextInput 
        label = 'password'
        value = {password}
        onChangeText = {(password:string) => setpass(password)}
        />
      <TextInput 
      label = 'confirm password'
      value = {confirmPass}
      onChangeText = {(confirmPass:string) => setCP(confirmPass)}
      />

      <TextInput 
      label = 'confirm password'
      value = {confirmPass}
      onChangeText = {(confirmPass:string) => setCP(confirmPass)}
      />

      <DropDown
            label={"Gender"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={Gender}
              setValue={setGender}
              list={GenderList}/>
        </View>
    )
}