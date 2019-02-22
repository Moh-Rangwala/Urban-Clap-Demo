import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createRootNavigator, SignedOut } from './src/Router';

const MainApp = createRootNavigator(SignedOut);

export default createAppContainer(MainApp);
