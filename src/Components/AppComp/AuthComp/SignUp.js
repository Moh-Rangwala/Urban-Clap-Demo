import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { CardView, CardSection, Input, Spinner } from '../../common';

class Signup extends Component {
    render() {
        const options = ['CUSTOMER', 'PROVIDER'];
        return (
            <Card
                title="REGISTRATION"
            >
                <CardView>
                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="Enter Full Name"
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="x-y-z@---mail.com"
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureText
                            label="Password"
                            placeholder="password"
                        />
                    </CardSection>

                    <CardSection >
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <CustomPicker
                                placeholder="USER TYPE"
                                options={options}
                                onValueChange={value => {
                                    Alert.alert('Selected Item', value || 'No item were selected!');
                                }}
                            />
                        </View>
                    </CardSection>

                </CardView>
                <CardView>
                    <Button
                        title="SIGN UP"
                    />
                </CardView>
            </Card>
        );
    }
}

export default Signup;
