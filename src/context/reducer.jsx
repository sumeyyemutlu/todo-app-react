

 export const initialState = {
    todo: []
}

const reducer =(state, action) => {
    console.log(action)

    switch (action.type) {
        case "ADD_TODO":
            
        return {
            ...state
        }
    
        default:
            return {
                ...state
            };
    }
}

export default reducer
