import React from 'react';
import { View, Button } from 'react-native-elements';
import UserProfile from '../Components/AppComp/MainAppComp/Customer/UserProfile';

export default ({ navigation }) => (
  <UserProfile 
  onLogOut={() => navigation.navigate('SignedOut')}
  />
);
