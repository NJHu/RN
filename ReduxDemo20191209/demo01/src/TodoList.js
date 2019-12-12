import React, {Component} from 'react'
import store from './store/store'
import {changeInputAction, deleteItemAction, addItemAction, getTodoList} from "./store/actionCreators";
import TodoListUi from './TodoListUi'


export default class TodoList extends Component {

    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState()
        this._changeInputValue = this.changeInputValue.bind(this);
        this._clickBtn = this.clickBtn.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this._deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <div>
                <TodoListUi
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    changeInputValue={this._changeInputValue}
                    clickBtn={this._clickBtn}
                    deleteItem={this._deleteItem}/>
            </div>
        );
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
        console.info(action)
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    changeInputValue({target}) {
        console.log(target.value);
        let value = target.value;
        const action = changeInputAction(value);
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState(), () => {
            console.log(this.state);
        });
    }
}