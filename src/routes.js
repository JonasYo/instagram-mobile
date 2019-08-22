import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './page/Feed';
import New from './page/New';

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 120 }} source={logo} />,
            headerBackTitle: null,
        },
        mode: 'modal'
        })
);