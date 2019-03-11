import React, {Component} from 'react';

import {
    FlatList, StyleSheet, Text, View
} from 'react-native';

import {MovieUrl} from '../NJConst/NJConst'
import MovieCell from './MovieCell'
import LoadingView from '../CommonViews/LoadingView'

/*声明一个组件*/
export default class MoveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(MovieUrl)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    data: this.state.data.concat(responseJson.movies)
                });
            });
    }

    render() {

        if (this.state.data.length == 0) {
            return (
                <LoadingView/>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor: 'red'}}>{MovieUrl}</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <MovieCell movie={item}/>}
                    style={styles.list}
                    keyExtractor={item => item.id}
                />
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
        backgroundColor: 'lightgray',
        flex: 1,
    },
    list: {
        backgroundColor: "#F5FCFF",
    }
});