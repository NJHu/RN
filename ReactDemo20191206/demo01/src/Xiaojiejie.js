import React, {Component} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

export default class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            //----------主要 代码--------start
            list: ['基础按摩', '精油推背']
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
                <div><input id='input-id' className="input" value={this.state.inputValue} onChange={this._inputChange}
                            type="text"/>
                    <button onClick={this._addList}>增加服务</button>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return (

                                <XiaojiejieItem key={index+item}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );

    }

    inputChange({target}) {
        console.info(target.value)
        this.setState((preState, props) => ({
            inputValue: target.value
        }));
    }

    addList() {
        this.setState((preState, props) => ({
            list: [
                ...preState.list,
                preState.inputValue
            ],
            inputValue: ''
        }));
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

