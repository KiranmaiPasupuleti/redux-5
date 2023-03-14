const initialState = {
    count: 0,
    loading: false
}

const reducer = (state = initialState,action) => {
    const newState = {...state} 
    if (action.type === "LOADING") {
        newState.loading = true
    }
    if (action.type === "INCREMENT") {
        console.log(action.value)
        newState.count += action.value
        newState.loading =false
    }
    if (action.type === "DECREMENT") {
        newState.count -= action.value
    }
    return newState
}

export default reducer