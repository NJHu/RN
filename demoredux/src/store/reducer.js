import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '中午下班游泳一小时'
    ]
};  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝stat
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝stat
        newState.list.push(action.value)  //push新的内容到列表中去
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝stat
        newState.list.splice(action.index,1)  //删除数组中对应的值
        return newState;
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝stat
        newState.list = action.data;
        return newState;
    }

    return state
}