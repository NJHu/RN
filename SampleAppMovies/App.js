/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "http://i.imgur.com/UePbdph.jpg"}
    }
];

export default class app extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: movie.posters.thumbnail}}/>
                <View
                    style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5FCFF"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 81,
        backgroundColor: 'gray'
    },
    title: {
        flex: 1,
        fontSize: 33,
        textAlign: 'center'
    },
    year: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});
