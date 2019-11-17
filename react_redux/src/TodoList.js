import React, {Component} from 'react';
import store from './store'
import {connect} from 'react-redux'  //引入连接器

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    render() {
        let {inputValue, inputChange, clickButton, list} = this.props;

        return ( <div>
            <div>
                <input value={inputValue} onChange={inputChange}/>
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index + item}>{item}</li>)
                    })
                }
            </ul>
        </div> );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = {type: 'add_item'}
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);