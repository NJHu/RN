import React, {Component} from 'react';
import TodoListUI from './TodoListUI'
import store from './store/index'
import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreators'


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        this._changeInputValue = this.changeInputValue.bind(this);
        this._clickBtn = this.clickBtn.bind(this);
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
        this._deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this._changeInputValue}
                clickBtn={this._clickBtn}
                deleteItem={this._deleteItem}/>
        );
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    changeInputValue(e) {
        //console.log(e.target.value);
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    storeChange() {
        this.setState((preState) => {
            return store.getState();
        });
    }

    clickBtn() {
        const action = addItemAction(this.state.inputValue);
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}