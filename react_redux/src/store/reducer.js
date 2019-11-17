const defalutState = {
    inputValue: 'jspang',
    list: []
}

export default (state = defalutState, action) => {
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    //----关键代码------start---------
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}