import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

/*声明一个组件*/
export default class BlinkLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowText: true,
            name: '我是BlinkLabel',
        };
        setInterval(() => {
            this.setState(state => {
                return {isShowText: !state.isShowText}
            })
        }, 1000);
    };

    render() {
        if (!this.state.isShowText) {
            console.log(this.state.name);
            return null;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.say}!</Text>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {},
    text: {
        color: 'red'
    }
});