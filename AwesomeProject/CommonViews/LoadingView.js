import React, {Component} from 'react';

import {
    StyleSheet, Text, View
} from 'react-native';


/*声明一个组件*/
export default class LoadingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor: 'red', fontSize: 26}}>Loading...</Text>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040',
        flex: 1,
    }
});