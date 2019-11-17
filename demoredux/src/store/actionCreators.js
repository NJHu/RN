import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addItemAction = (value) => ({
    type: ADD_ITEM,
    value: value
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index: index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data: data
})

export const getTodoList = () => {
    return (dispatch) => {
        console.log('2222');
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data.data.list;
            const action = getListAction(data);
            console.log('111111');
            console.log(data);
            dispatch(action);
        })
    }
}