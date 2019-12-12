import {ActionTypes} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: ActionTypes.CHANGE_INPUT,
    value: value
});

export const addItemAction = () => ({

    type: ActionTypes.ADD_ITEM,
});

export const deleteItemAction = (index) => ({
    type: ActionTypes.DELETE_ITEM,
    index: index
});

export const getTodoListAction = (list) => ({
    type: ActionTypes.GET_TODO_LIST,
    list: list
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('file:///Users/huxupeng/MyProjects/njhu.github.io/files/todolist.json')
            .then((res) => {
                // console.log(res.data);
                // const action = getTodoList(res.data.data.list);
                // store.dispatch(action)
            }).catch((err) => {
            console.log(err);

            let data = {
                "data": {
                    "list": [
                        '早上4点起床，锻炼身体',
                        '中午下班游泳一小时',
                        '晚上8点到10点，学习两个小时66666'
                    ]
                }
            };

            const action = getTodoListAction(data.data.list);
            dispatch(action)
        });
    }
}
