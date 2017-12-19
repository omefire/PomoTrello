
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default class HomeScreen extends React.Component {
    goToLogin() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: 'white' }}>Hello PomoTrello!</Text>
                <Text style={{ fontSize: 15, color: 'white', margin: 15 }}>Ready to have your productivity skyrocket?</Text>
                <Image source={require('./cat_pic.jpg')}></Image>
                <TouchableHighlight onPress={() => this.goToLogin()}>
                    <Text color="white" style={styles.loginButtonText}>Log Into Your Trello Account</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginButtonText: {
        margin: 50,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#68a0cf',
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
});