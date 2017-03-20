import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';

// { album } destructions the album data from the prop data object!
const AlbumDetail = ({ album  }) => { 
    const { thumbnail_image, image, title, artist, url } = album;
    const { 
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    //By default, react does not create scrollable content! You must tell what you want to be scrollable.
    return (
        <Card>
            <CardSection>
                <View style = {thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image  }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style = {imageStyle}
                    source = {{ uri: image }} 
                />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
export default AlbumDetail;
