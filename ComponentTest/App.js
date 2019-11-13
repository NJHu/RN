/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TextInput,
} from 'react-native';

export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This \nis \nnot\n really\n a\n bird\n ne\nst.',
            value: '',
        };
        this._onPressTitle = this.onPressTitle.bind(this);
    }

    render() {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 100 }}
                onChangeText={this._onPressTitle}
                value={this.state.value}
            />
        )
    }

    onPressTitle(text) {
        // Alert.alert(text);
        this.setState({
            value: text,
        });
    }
}
