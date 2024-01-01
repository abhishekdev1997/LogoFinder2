import { useReducer } from "react";
import { DECREMENT_SCORE, INCREMENT_SCORE, IS_OVER, RESET, UPDATE, UPDATE_INDEX } from "../utils/constants";
import { InitialState } from "../@@types";


const useValueReducer = (initialState: InitialState) => {
    const valueReducer = (state: any, action: { type: string, payload: string }) => {
        switch (action.type) {
            case UPDATE:
                return { ...state, value: state.value + action.payload }
            case RESET:
                return { ...state, value: "" }
            case INCREMENT_SCORE:
                return { ...state, score: state.score + 2 }
            case DECREMENT_SCORE:
                return { ...state, score: state.score - 1 }
            case IS_OVER:
                return { ...state, isOver: true }
            case UPDATE_INDEX:
                return { ...state, currentIndex: state.currentIndex + 1 }
            default:
                return state
        }
    }

    const [value, dispatch] = useReducer(valueReducer, initialState);
    return [value, dispatch]
}

export default useValueReducer;