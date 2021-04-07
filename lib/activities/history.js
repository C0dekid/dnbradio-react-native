import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

import Style from '../assets/styles/splash'
export default class History extends Component<{}> {
    render() {
        return(
            <View style={Style.container}><Text>History</Text></View>);
    }
}