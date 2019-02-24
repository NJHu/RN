import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

/*声明一个组件*/
export default class TabBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.btn}>1</Text>
                <Text style={styles.btn}>2</Text>
                <Text style={styles.btn}>3</Text>
                <Text style={styles.btn}>4</Text>
            </View>
        );
    }
}


/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#000000',
        height: 49,
        // width: 375,
        // flex: 1,
        flexDirection: 'row',
    },
    btn: {
        color: 'red',
        backgroundColor: 'yellow',
        textAlign: 'center',
        flex: 1
    }
});