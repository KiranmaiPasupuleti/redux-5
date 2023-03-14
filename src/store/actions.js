export const loading = (value) => {
    return {
        type: "LOADING",
        
    }
}

export const incrementAsync = (value) => {
    return {
        type: "INCREMENT",
        value
    }
}

export const increment = (value) => {
    return dispatch => {
        // dispatch(loading())
        // setTimeout(() => {
        //     dispatch(incrementAsync(value))
        // } , 5000)
        dispatch(loading())
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(incrementAsync(value))
      })

    }
}