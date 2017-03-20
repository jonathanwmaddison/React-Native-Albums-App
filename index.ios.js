//Index.os.js  this is for Ios development

//Import a library to create a component.
    //the import statements are part of es6. The give you access to variables in react and react-native
import React from 'react';
import { AppRegistry, View } from 'react-native'; // this is called object destructuring - it provides access to Text and App Registry code from React Native.
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

    // Difference between React and React Native - React - Knows how a component should behave and acan integrate a whole set of components. React Native - Portal to the mobile device. Nows how to to take output from component and put on a mobile device. Provides default cor components.
//Create a coponent - Components have jsx and tell the device what to render to the screen

//below is jsx syntax. jsx is the only way to communicate formatting to react native.  Babel turns jsx into raw javascript. jsx is just a mask for pure javascript function calls.
// the flex: 1 style on app is a way to ensure proper scrolling beahvior. This expands the entire area of the scrollable component.


const App = () => (
    <View style={{ flex: 1 }}>    
        <Header headerText={'Albums'} /> 
        <AlbumList />
    </View>
);

//Render it to the device

AppRegistry.registerComponent('albums', () => App);


