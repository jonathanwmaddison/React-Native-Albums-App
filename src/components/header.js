//Import libraries for making a compoentns
import React from 'react';
import { Text, View } from 'react-native';
//view tag allows for positioning (sort of like a div

//Make a component - the APP component will provide access to an object with properties that tell Header what to display. It is passed in as an argument into header. Then we have access to these properties outisde of the root component App.
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//Styles - styles are writtend in camelcase - it is similar to css but not the 
//same language :<(
    //flexbox is a system of positioning within a container. React Native uses this!
        //justifyContent- position elements in vertical direciton
        //alignItems: position elements in horizontal direction.

const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

//Make the component available to other components

export default Header;
