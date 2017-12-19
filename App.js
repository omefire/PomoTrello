/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen from './Login';

export default App =  StackNavigator({
    Home: { 
            screen: HomeScreen,
            navigationOptions: {
                headerLeft: null,
            }
    },
    Login: { 
        screen: LoginScreen ,
        navigationOptions: {
            headerLeft: null,
        }
    }
});