import React, {Component} from 'react';

import {
    View, StyleSheet
} from 'react-native';

import MoveList from '../MovieList/MoveList'

/*声明一个组件*/
export default class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MoveList/>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#ffffff',
        flex: 1,
    }
});