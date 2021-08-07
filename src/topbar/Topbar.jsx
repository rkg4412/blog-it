import axios from 'axios';
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './topbar.css';
import { connect } from "react-redux"
import * as actionCreator from "../ActionCreater/Authdis"

class Topbar extends Component {


    state = {
        user: null
    }



    logout = async (e) => {
        e.preventDefault();
        const res = axios({
            method: "GET",
            url: "api/auth/logout"
        })

        if (res) {
            this.props.history.push("/login")
            window.location.reload()

        }

    }

    componentDidMount() {
        this.props.load_u()

    }


    render() {

        console.log("this is top bar", this.props.logvalue)
        const logging = (this.props.logvalue === "null") ? <li className="topListItem" >LOGIN</li> : <li className="topListItem" ><a href="#" onClick={this.logout}>LOGOUT</a></li>
        const userdisplay = (this.props.logvalue === null) ? <li>user</li> : <li className="topListItem" >{this.props.logvalue.email}</li>

        return (
            <div className="top">
                <div className="topleft">
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                </div>
                <div className="topcenter">
                    <ul className="topList">
                        <li className="topListItem"><Link to="/">HOME</Link></li>
                        <li className="topListItem"><Link to="/about">ABOUT</Link></li>
                        <li className="topListItem"><Link to="/Contact">CONTACT</Link></li>
                        <li className="topListItem">WRITE</li>
                        {logging}
                        {userdisplay}

                    </ul>
                </div>
                <div className="topRight">
                    <img
                        className="topImg"
                        src=""
                        alt=""
                    />
                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>
        )
    }
}



const Maptopropstopbar = (state) => {
    return {
        logvalue: state.loged
    }

}


export default connect(Maptopropstopbar, actionCreator)(withRouter(Topbar))