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
});

const History = ({navigation}) => {
    return (
        <View style={styles.container}>
            History Component
        </View>
    );
}

export default History;