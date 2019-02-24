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

/*声明一个组件*/
export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <Image
                    src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550997074563&di=8279cb41a6e2a5b51f286124631d1366&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F54ebececeda0217648263cc944d6cfd413a17cdf2cc6-MGHS0y_fw658'}
                    style={styles.productImages}/>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    productImages: {
        width: 100,
        height: 100,
        backgroundColor: '#000960',
    },
});

/*渲染到app里边*/
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
