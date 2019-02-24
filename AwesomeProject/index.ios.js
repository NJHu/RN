/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import MainView from './TabBar/MainView.js';

/*声明一个组件*/
export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainView/>
            </View>
        );
    }
}

// class

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

/*渲染到app里边*/
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
