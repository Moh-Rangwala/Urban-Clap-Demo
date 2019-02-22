import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Signup from './Components/AppComp/AuthComp/SignUp';

class MainApp extends Component {
    
componentDidMount() {
    SplashScreen.hide();
  }
    render() {
        return (
            <View>
              <Signup />
            </View>
        );
    }
}

export default MainApp;
