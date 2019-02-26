import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import { CardView, CardSection, Input } from '../../common';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
}
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        const { onSignIn } = this.props;
        return (
            <Card
                title="SIGN-IN"
            >
                <CardView>

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

                </CardView>

                <CardView>
                    <Button
                        title="LOG IN"
                        onPress={onSignIn}
                    />

                </CardView>
            </Card>
        );
    }
}

export default SignIn;
