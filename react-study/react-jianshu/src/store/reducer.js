const defaultStates={
    isLogin:false
}
export default(state=defaultStates,action)=>{
    if(action.type=='getData') {
        let newState = state.isLogin
        return newState
     } 
     return state
}
