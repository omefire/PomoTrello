

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Username:</Text>
            </View>
        );
    }
}

/*const styles = StyleSheet.create({
    loginButtonText: {
        margin: 50,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#68a0cf',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007FFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});*/