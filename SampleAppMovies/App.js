/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {Image, StyleSheet, Text, View, FlatList} from "react-native";

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
const REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

const MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "https://ceph-dev-pub.dz11.com/fed-doc/1571728948385.png"}
    }
];

export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        };
        this._fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {

        if (!this.state.movies) {
            return (
                <View style={styles.container}>
                    <Text>
                        正在加载电影数据……
                    </Text>
                </View>
            );
        }

        return (
            <FlatList
                data={this.state.movies}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id}/>
        )
    }


    renderMovie({item}) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: item.posters.thumbnail}}/>
                <View
                    style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                });
            })
            .catch(error => {
                console.error(error);
            });
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
        backgroundColor: '#f0f'
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
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    }
});
