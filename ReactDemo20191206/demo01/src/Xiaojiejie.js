import React, {Component} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'

export default class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            //----------主要 代码--------start
            list: ['基础按摩']
            //----------主要 代码--------end
        }
        this._inputChange = this.inputChange.bind(this);
        this._addList = this.addList.bind(this);
        this._deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div>
                <label htmlFor="input-id">加入服务</label>
                <div><input id='input-id'
                            className="input"
                            value={this.state.inputValue}
                            onChange={this._inputChange}
                            type="text"
                            ref={(input) => {
                                this.input = input
                            }}/>
                    <button onClick={this._addList}>增加服务</button>
                </div>
                <div>
                    <ul ref={(ul) => {
                        this.ul = ul
                    }}>
                        {this.state.list.map((item, index) => {
                            return (

                                <XiaojiejieItem key={index + item}
                                                content={item}
                                                index={index}
                                                deleteItem={this._deleteItem}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        );

    }

    componentDidMount() {
        axios.get('https://njhu.github.io/files/articleList.json')
            .then((res) => {
                console.log(JSON.stringify(res));
            }).catch((err) => {
            console.log(err);
        });
    }

    inputChange() {
        this.setState((preState, props) => ({
            inputValue: this.input.value
        }));
    }

    addList() {
        this.setState((preState, props) => ({
            list: [
                ...preState.list,
                preState.inputValue
            ],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        });

    }

    deleteItem(index) {
        console.info(index)
        let list = this.state.list;
        list.splice(index, 1);
        console.info(list)
        this.setState((preState) => ({
            list: list
        }));
    }
}

