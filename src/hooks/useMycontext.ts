import { useContext } from "react"
import { MyContext } from "../provider"

const useMycontext = () => {

    const context = useContext(MyContext)
    if (context) {
        return context
    } else {
        return {
            value: ""
        }
    }
}

export default useMycontext;