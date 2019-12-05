import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, NativeModules} from 'react-native';

const ToastModule = NativeModules.ToastModule;

export default class RNHighScores extends React.Component {

    constructor(props) {
        super(props);
        this._onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    render() {
        var contents = null;
        if (this.props['scores'] != null) {
            contents = this.props['scores'].map((score) => (
                <Text key={score.name}>
                    {score.name}:{score.value}
                    {'\n'}
                </Text>
            ));
        }

        return (
            <View style={styles.container}>
                <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
                <Text style={styles.scores}>{contents}</Text>
                <Button
                    onPress={this._onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                />
            </View>
        );
    }

    onPressLearnMore () {
        ToastModule.show("Awesome", ToastModule.SHORT);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});