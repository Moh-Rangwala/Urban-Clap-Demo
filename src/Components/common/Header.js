// IMPORT LIBRARIES TO MAKE A COMPONENT
import React from 'react';
import { Text, View } from 'react-native';

// MAKE A COMPONENT
const Header = (party) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{party.headText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFFF00'
    }
};



// MAKE THE COMPONENTS AVAILABLE TO OTHER PARTS OF THE APP
export { Header };
 