import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppRegistry} from 'react-native';


export default class Activity extends React.Component {

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
                <Text style={styles.highScoresTitle}>6666666666 High Scores!</Text>
                <Text style={styles.scores}>{contents}</Text>
            </View>
        );
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


AppRegistry.registerComponent('Activity', () => Activity);