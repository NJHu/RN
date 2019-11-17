/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState, useEffect} from 'react';
import {
    Animated, Text, View, AppState
} from 'react-native';
// import DYComponent from './DYComponent';

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))
    // 透明度初始值设为0

    React.useEffect(() => {
        Animated.timing(                  // 随时间变化而执行动画
            fadeAnim,                       // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 3000,              // 让动画持续一段时间
            }
        ).start();                        // 开始执行动画
    }, []);

    return (
        <Animated.View                 // 使用专门的可动画化的View组件
            style={{
                ...props.style,
                opacity: fadeAnim,         // 将透明度绑定到动画变量值
            }}
        >
            {props.children}
        </Animated.View>
    );
};

export default class app extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            appState: AppState.currentState,
        };

    }

    render() {
        console.log("12321321");
        // DYComponent.showFrom("sss", null);
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
    // run(params) {
    //     console.log("logrunlogrunlogrunlogrun");
    //     console.log(params);
    // }
}

