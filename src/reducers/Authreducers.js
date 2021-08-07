import axios from "axios"


let initstate = {
    loged: null
}





const Authreducers = (state = initstate, action) => {

    if (action.type == "LOG_IN") {
        return {
            ...state,
            loged: action.log
        }
    }

    return state

}




export { Authreducers };






