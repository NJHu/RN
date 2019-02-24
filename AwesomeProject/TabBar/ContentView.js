import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

class PizzaTranslator extends Component {
    constructor (props) {
        super(props);
        this.state={text: ''};
    };
    render () {
        return (
            <View style={{backgroundColor: 'purple', height: 150}}>
                <TextInput style={{height: 40}}
                           placeholder='input text here'
                           onChangeText={(text) => this.setState({text})}/>
                <Text style={{height: 30}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}

/*声明一个组件*/
export default class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PizzaTranslator></PizzaTranslator>
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
    },
    btn: {
        color: 'red',
        height: 49,
        backgroundColor: 'yellow',
        // width: 375
        // textAlign: 'center',
        // flex: 1
    }
});