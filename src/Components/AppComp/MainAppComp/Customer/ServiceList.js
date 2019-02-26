import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ServiceList extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }}>Service List!</Text>
            </View>
        );
    }
}

export default ServiceList;
