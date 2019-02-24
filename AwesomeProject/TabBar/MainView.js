import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import TabBar from './TabBar'
import Navigation from './Navigation'
import ContentView from './ContentView'

/*声明一个组件*/
export default class MainView extends Component {
    render() {
        return (
            <View style={mainViewStyles.container}>
                <Navigation></Navigation>
                <ContentView></ContentView>
                <TabBar></TabBar>
            </View>
        );
    }
}

/*声明一些样式*/
const mainViewStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});