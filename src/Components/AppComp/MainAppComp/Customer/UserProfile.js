import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

class UserProfile extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
    render() {
        const { onLogOut } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }}>USER PROFILE!</Text>
                <Button 
                title="LOG-OUT"
                onPress={onLogOut}
                />
            </View>
        );
    }
}

export default UserProfile;
