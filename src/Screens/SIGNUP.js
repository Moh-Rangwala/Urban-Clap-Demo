import React from 'react';
import { View } from 'react-native';
import SignUp from '../Components/AppComp/AuthComp/SignUp';

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
       <SignUp 
       onSignUp={() => navigation.navigate('SignIn')}
       />
  </View>
);
