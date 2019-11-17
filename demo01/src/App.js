import React, {Component, Fragment} from 'react'
import './App.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'

export default class App extends Component {
    //js的构造函数，由于其他任何函数执行
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法
        this.state = {
            inputValue: 'jspang', // input中的值
            list: ['基础按摩', '精油推背']    //服务列表
        };
        this._inputChange = this.inputChange.bind(this);
        this._addList = this.addList.bind(this);
        this._deleteItem = this.deleteItem.bind(this);
    };

    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5dd1370bcf8d630c68faf0c3/example/list')
            .then((res) => {
                console.log('axios 获取数据成功:' + JSON.stringify(res))
            })
            .catch((error) => {
                console.log('axios 获取数据失败' + error)
            });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="japang">zzazzz</label>
                    <input className='input' value={this.state.inputValue} onChange={this._inputChange}
                           ref={(input) => {
                               this.input = input
                           }}/>
                    <button id="japang" onClick={this._addList}> 增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // return <li key={index + item} onClick={this.deleteItem.bind(this, index)}><h1>{item}</h1></li>
                            return <XiaojiejieItem key={index + item} content={item} index={index}
                                                   deleteItem={this._deleteItem}/>
                        })
                    }
                </ul>
                <Boss/>
            </Fragment>
        );
    };

    inputChange(e) {
        console.log(e);
        this.setState({
            inputValue: this.input.value
        });
    }

    addList({e}) {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            // console.log(this.ul.querySelectorAll('div').length);
        })
    }

    deleteItem(index) {
        // console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}