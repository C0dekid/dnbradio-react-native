import React, { Component } from 'react'
import Service from './lib/service'
import Splash from './lib/activities/splash'
import { Tabs } from './lib/router';

export default class App extends Component<{}> {
    state = {
        loaded: false
    };
    constructor() {
        super();
        Service.load(v => this.setState({ loaded: true }));
    }
    render() {
        // Player : Splash
        return (this.state.loaded ? <Tabs /> : <Splash />)
    }
}