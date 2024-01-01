import { useEffect } from "react"
import { useMycontext } from "."
import { DECREMENT_SCORE, INCREMENT_SCORE, IS_OVER, RESET, UPDATE_INDEX } from "../utils/constants";

const useSuccessGuess = (name: string, reLoad: () => void) => {
    const context = useMycontext()
    useEffect(() => {
        if (name?.length === context.value.value.length) {
            if (name === context.value.value) {
                context.dispatch({ type: INCREMENT_SCORE })
            } else {
                context.dispatch({ type: DECREMENT_SCORE })
            }

            if (context.value.currentIndex >= 5) {
                context.dispatch({ type: IS_OVER })
            } else {
                context.dispatch({ type: UPDATE_INDEX })
                context.dispatch({ type: RESET })
                reLoad()
            }
        }
    }, [context.value.value])
}

export default useSuccessGuess;