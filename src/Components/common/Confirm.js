import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent={false}
            animationType='slide'
            onRequestClose={() => { Actions.pop(); }}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onTouch={onAccept}>
                        Yes
                    </Button>

                    <Button onTouch={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
    }
};

export { Confirm };
