import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import SIGNIN from './Screens/SIGNIN';
import SIGNUP from './Screens/SIGNUP';
import HOME from './Screens/HOME';

const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator(
 {
    SignUp: {
        screen: SIGNUP,
        navigationOptions: {
            title: 'URBAN CLAP',
            headerStyle
        }
    },
    SignIn: {
        screen: SIGNIN,
        navigationOptions: {
            title: 'URBAN CLAP',
            headerStyle
        }
    }
},
    {
        initialRouteName: 'SignIn'
    }
);

export const SignedIn = createBottomTabNavigator(
    {
        Home: {
            screen: HOME
        }
    });

export const createRootNavigator = () => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
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

