
const initialState = {
    count: 0
}

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export function reducer (state = initialState, action) {
        if (action.type === INCREMENT) {
            return{
                ...state,
                count: state.count + 1
            };
        }else if(action.type === DECREMENT) {
            return {
                ...state,
                count: state.count - 1 >= 0 ? state.count - 1 : 0
            }
        } else {
            return state
        }
}