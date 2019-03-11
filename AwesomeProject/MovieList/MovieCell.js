import React, {Component} from 'react';

import {
    Image, StyleSheet, Text, View
} from 'react-native';

/*声明一个组件*/
export default class MovieCell extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        console.log(this.props.movie);
        return (
            <View style={styles.container}>
                {/*<Image style={styles.thumbnail} source={{uri: this.props.movie.posters.thumbnail}}/>*/}
                <Image style={styles.thumbnail} source={pic}/>
                <View style={styles.rightContainer}>
                    <Text style={{marginBottom: 20}}>{this.props.movie.title}</Text>
                    <Text>{this.props.movie.year}</Text>
                </View>
            </View>
        );
    }
}

/*声明一些样式*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'pink',
        height: 80,
        marginBottom: 5,
    },
    thumbnail: {
        width: 53,
        backgroundColor: 'white'
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});