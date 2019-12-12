import {ActionTypes} from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时11'
    ]
};

export default function reducer(state = defaultState, action) {
    if (action.type === ActionTypes.CHANGE_INPUT) {
        // let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        // newState.inputValue = action.value
        // return newState
        state.inputValue = action.value;
    } else if (action.type === ActionTypes.ADD_ITEM) {

        state.list = [
            ...state.list,
            state.inputValue
        ];
        state.inputValue = '';
    } else if (action.type === ActionTypes.DELETE_ITEM) {
        let index = action.index;
        state.list.splice(index, 1);
    }else if(action.type === ActionTypes.GET_TODO_LIST){
        let list = action.list;
        state.list = list;
    }

    return state;
}
