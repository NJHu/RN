import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {AppRegistry} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';

const CalendarManager = NativeModules.CalendarManager;
const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);

export default class Activity extends React.Component {

    constructor(props) {
        super(props);
        this._addCalEvent = this.addCalEvent.bind(this);

        const subscription = calendarManagerEmitter.addListener(
            'EventReminder',
            (reminder) => console.log(reminder.name)
        );
        this.mysubscription = subscription;
    }

    componentWillUnmount() {
        this.mysubscription.remove();
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
                <Text style={styles.highScoresTitle}>6666666666 High Scores!</Text>
                <Text style={styles.scores}>{contents}</Text>
                <Button onPress={this._addCalEvent} title="add"></Button>
            </View>
        );
    }

    async addCalEvent() {
        try {

            const events = await CalendarManager.findEvents();

            console.info(events);

        } catch (e) {
            console.error(e);
        }
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