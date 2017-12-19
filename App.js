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
                header: null,
            }
    },
    Login: { 
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    }, 
},
{
    initialRouteName: 'Home',
});