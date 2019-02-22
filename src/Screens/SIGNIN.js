import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import SignIn from '../Components/AppComp/AuthComp/SignIn';

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
       <SignIn
       onSignIn={() => navigation.navigate('SignedIn')}
       />
      <Card
      title="NEW HERE?"
      >
          <Button
          title="SIGN-UP"
          onPress={() => {
              return navigation.navigate('SignUp');
          }}
          />
          </Card> 

  </View>
);
