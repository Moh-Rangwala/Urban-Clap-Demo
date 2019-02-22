import React from 'react';
import { View } from 'react-native';


const CardView = (props) => {
    return (
      <View style={styles.containerStyle}>
      {props.children}
      </View> 
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        // paddingBottom: 15
    }
};

export { CardView };
