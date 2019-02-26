import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { CardView, CardSection, Input } from '../../common';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', usertype: '' };
    }
    render() {
        const { onSignUp } = this.props;
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
                            value={this.state.name}
                            onChangeText={(text) => this.setState({ name: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="x-y-z@---mail.com"
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureText
                            label="Password"
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
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
                        onPress={onSignUp}
                    />
        
                </CardView>
            </Card>
        );
    }
}

export default Signup;
