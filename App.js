import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './src/MainApp';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
}

  render() {
    return (
      <View style={styles.container}>
    <MainApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
