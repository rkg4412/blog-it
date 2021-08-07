import React, { Component } from 'react'
import './home.css';
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar';
import Posts from '../../posts/Posts';
import axios from "axios"


class Home extends Component {

    componentDidMount() {
        axios({
            method: "GET",
            url: "/api/posts/"
        }).then(res => {
            if (res.data.auht) {
                this.props.history.push("/login")
            }

        }).catch(err => { console.log(err) })

    }
    render() {
        return (
            <>
                <Header />
                <div className="home">

                    <Posts />
                    <Sidebar />
                </div>
            </>
        )
    }
}



export default Home
