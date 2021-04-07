import React from 'react'
import { TabNavigator } from 'react-navigation'

import Player from './activities/player'
import History from './activities/history'

export const Tabs = TabNavigator({
    Player: {
        screen: Player,
        navigationOptions: {
            path: '/player',
            tabBarLabel: 'Home'
        }
    },
    History: {
        screen: History,
        navigationOptions: {
            path: '/history',
            tabBarLabel: 'History'
        }
    }
}, {
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        allowFontScaling: true,
        showIcon: false,
        showLabel: true,
        pressColor: "#333",
        iconStyle: {
            width: 30,
            height: 30
        },
        style: {
            backgroundColor: "#111",
            elevation: 0
        },
        indicatorStyle: {  backgroundColor: 'transparent' }
    }
});