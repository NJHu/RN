import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

/*声明一个组件*/
export default class Navigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.btn}>A</Text>
                <Text style={styles.btn}>B</Text>
                <Text style={styles.btn}>C</Text>
                <Text style={styles.btn}>D</Text>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        // flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 64,
    },
    btn: {
        color: 'red',
        backgroundColor: 'green',
        textAlign: 'center',
        flex: 1
    }
});