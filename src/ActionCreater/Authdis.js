import axios from "axios";

export function load_u() {
    return (dispatch) => {
        return axios({
            method: "GET",
            url: "api/auth/loggedin"
        }).then(res => { dispatch(changelog(res.data.value)) })
    }

}


export function changelog(loged) {
    console.log(loged)
    return {
        log: loged,
        type: "LOG_IN"
    }
}