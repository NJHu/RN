import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
    }
];

class MovieItemView extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View>
                <Text>{movie.title}</Text>
                <Text>{movie.year}</Text>
                <Image source={{uri: movie.posters.thumbnail}}/>
            </View>
        )
    }
}

/*声明一个组件*/
export default class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}


/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#ffffff',
        flex: 1,
    }
});