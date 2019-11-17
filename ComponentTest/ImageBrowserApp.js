import React, {Component, useState, useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import DYComponent from './DYComponent'
// import {NativeModules} from 'react-native'
import {AppRegistry} from 'react-native';


export default class ImageBrowserApp extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        // const DYComponent = NativeModules.DYComponent;
        DYComponent.showFrom("ImageBrowserApp-1", {});
    }

    render() {
        // DYComponent.showFrom("sss", null);
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text>12312</Text>
                <Text>{this.props.images}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('ImageBrowserApp', () => ImageBrowserApp);