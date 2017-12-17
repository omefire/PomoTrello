/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen from './Login';

export default App =  StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen }
});