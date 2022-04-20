import React from "react";

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Register from "./../components/Register.js"; 
import Accessibility from './../components/Accessibility.js';
import ForgotPassword from './../components/ForgotPassword';
import Login from './../components/Login.js';
import Home from './../components/Home.js';
import Profile from './../components/Profile.js'
import AccessibilityCreation from './../components/AccessibilityCreation.js'

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Accessibility" component={Accessibility}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="AccessibilityCreation" component={AccessibilityCreation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;