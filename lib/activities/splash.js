import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

import Style from '../assets/styles/splash'
export default class Splash extends Component<{}> {
    render() {
        return(
            <View style={Style.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Image style={{ flex: 1 }} blurRadius={2} source={require('../assets/images/wallpaper.jpg')} />
                </View>
                <Image resizeMode='center' source={require('../assets/images/logo.png')} />
            </View>);
    }
}