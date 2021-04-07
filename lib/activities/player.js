import React, { Component } from 'react';
import { View, Image, Text, StatusBar, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Album from '../album'

import Style from '../assets/styles/player';
export default class Player extends Component<{}> {
    constructor(props)
    {
        super(props);
        this.state = {
            track: {
                cover: null,
                cartist: null,
                ctitle: null,
                cisLive: false,
                cRemaining: null,
            },
            viewport: {
                w: Dimensions.get('window').width,
                h: Dimensions.get('window').height
            },
            carouselEntries: [
                {
                    album: {
                        cover: "https://lastfm-img2.akamaized.net/i/u/300x300/ff1a014a53df49c1c939cbe3ede13abf.png",
                        year: null,
                        title: "Banaan"
                    }
                }
            ]
        };
    }
    _renderItem({item, index})
    {

        return <View style={Style.albumCover}>
            <Album src={ item.album.cover} year="2017" title="lol" />
        </View>;
    }
    render() {
        return(
            <View style={Style.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Image style={{ flex: 1, width: 400, height: 400 }} blurRadius={3} source={{ uri: this.state.track.cover }} />
                </View>
                <View style={Style.album}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.carouselEntries}
                        renderItem={this._renderItem}
                        sliderWidth={this.state.viewport.h}
                        contentContainerCustomStyle={{  alignItems: 'center' }}
                        inactiveSlideScale={0.8}
                        inactiveSlideOpacity={0.7}
                        swipeThreshold={0}
                        sliderHeight={240}
                        itemWidth={this.state.viewport.w - 80}
                        itemHeight={200}
                        loop={false}
                        autoplay={false}
                        enableSnap={true}
                        lockScrollWhileSnapping={true}
                        firstItem={0}
                    />
                    <View style={Style.albumBox1}>
                        <Text style={Style.playlistSongtitle}>Sandstorm</Text>
                        <Text style={Style.playlistSongartist}>John Doe</Text>
                    </View>
                </View>
            </View>);
    }
}