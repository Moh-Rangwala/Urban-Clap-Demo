import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createNavigationContainer,
    createAppContainer,
} from 'react-navigation';

import Customer from './Containers/CustomerContainer';
import SIGNIN from './Screens/SIGNIN';
import SIGNUP from './Screens/SIGNUP';

const SignedOut = createStackNavigator(
    {
        SignUp: {
            screen: SIGNUP,
            navigationOptions: {
                title: 'URBAN CLAP',
            }
        },
        SignIn: {
            screen: SIGNIN,
            navigationOptions: {
                title: 'URBAN CLAP',
            }
        }
    },
    {
        initialRouteName: 'SignIn'
    }
);

const CustomerLoggedIn = createStackNavigator(
    {
        Customer: {
            screen: Customer,
            navigationOptions: {
                title: 'URBAN CLAP',
            }
        }
    }
);

const createRootNavigator = () => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: CustomerLoggedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: 'SignedOut'
        }
    );
};
const MainApp = createAppContainer(createRootNavigator(SignedOut));
export default MainApp;
