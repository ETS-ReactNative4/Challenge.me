import React, { useState } from 'react';
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
    CheckBox,
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
        alignItems: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
    },
    description2: {
        marginLeft: 2,
        fontSize: 15,
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
    registerButton: {
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#265A92',
        boxShadow: "4px 4px 5px lightblue",
        width: 175,
    },
    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#265A92',
        borderColor: '#265A92',
        boxShadow: "4px 4px 5px lightblue",
        width: 150,
    },
});

const Profile = ({navigation}) => {
    const firstName = React.useState("Test First Name");
    const lastName = React.useState("Test Last Name");
    const username = React.useState("Test username");
    const dob = React.useState("August 14, 2000");
    const gender = React.useState("Male");
    const [isSelected, setSelection] = useState(false);

    const updateSettings = () => {
        //API CALL TO UPDATE

        //Return to Home Screen
        navigation.navigate("Home");
    }
    
    return (
        <View style={styles.container}>
            
            <br></br>
            <Image
                style = {styles.logo}
                source={{uri: 'https://raw.githubusercontent.com/Zach-Clay/Challenge.me/main/images/logo.jpeg', }}
            />
            <br></br>
            
            <View>
                <List.Item
                    descriptionStyle={styles.description}
                    title="First Name"
                    description={firstName}
                />
                <List.Item
                    descriptionStyle={styles.description}
                    title="Last Name"
                    description={lastName}
                />
                <List.Item 
                    descriptionStyle={styles.description}
                    title="Username"
                    description={username}
                />
                <List.Item 
                    descriptionStyle={styles.description}
                    title="Date of Birth"
                    description={dob}
                />
                <List.Item 
                    descriptionStyle={styles.description2}
                    title="Gender"
                    description={gender}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox 
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text style={styles.label}>Push Notifications</Text>
            </View>

            <Button style = {styles.registerButton} labelStyle = {{color: "#265A92", fontWeight: 'bold'}} mode = "contained" onPress={() => navigation.navigate("Accessibility")}>Accessibility</Button> 
            <br></br>
            <Button style={styles.button} labelStyle = {{fontWeight: 'bold'}} mode = "contained" onPress={updateSettings}> Save </Button>

        </View>
    )
};
  
export default Profile;
