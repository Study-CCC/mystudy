import {CHANGE_INPUT,ADD_DATA,DELETE} from './actionType'
const defaultState = {
    inputValue: "Write Something",
    list: [
        "zzz",
        "xxx",
        "ccc"
    ]
}
export default (state = defaultState, action) => {
    // console.log(state,action);

    // Reducer中只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_DATA) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if (action.type === DELETE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}