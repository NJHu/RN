import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {AppRegistry} from 'react-native';
import {NativeEventEmitter, NativeModules, requireNativeComponent} from 'react-native';

const CalendarManager = NativeModules.CalendarManager;
const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);
const MapView = requireNativeComponent('RNTMap');

export default class MyMap extends React.Component {

    render() {
        return (<MapView zoomEnabled={true} style={{flex: 1}}/>);
    }
}

// MyMap.propTypes = {
//     /**
//      * A Boolean value that determines whether the user may use pinch
//      * gestures to zoom in and out of the map.
//      */
//     zoomEnabled: PropTypes.boolean,
// };


AppRegistry.registerComponent('MyMap', () => MyMap);