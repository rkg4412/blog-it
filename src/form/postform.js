import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as actionCreator from "../ActionCreater/Authdis"
import axios from "axios"

class PostForm extends Component {
    state = {
        title: "",
        desc: "",
        categ: "",
        username: "",
        photo: "",
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "/api/posts/"
        }).then(res => {
            if (res.data.auht) {
                this.props.history.push("/login")
            } else {
                this.props.load_u()
                this.setState({
                    username: this.props.logvalue.email
                })
                console.log("this is post form", this.state)
            }

        }).catch(err => { console.log(err) })

    }



    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }




    render() {
        return (
            <div>
                <form>
                    <label> Title</label>
                    <input name="title" required="true" type="text" value={this.state.title} onChange={this.handleChange} />
                    <br />

                    <label>Description</label>
                    <textarea name="desc" required="true" type="text" maxLength="320" value={this.state.desc} onChange={this.handleChange} />
                    <br />
                    <label>Image</label>
                    <input name="photo" required="true" type="file" accept=".jpg, .png" onChange={this.handleChange} />
                    <br />
                    <label>Image name</label>
                    <input name="photo" required="true" type="text" value={this.state.photo} onChange={this.handleChange} />
                    <br />
                    <label>Categoriey</label>
                    <input name="categ" required="true" type="text" value={this.state.categ} onChange={this.handleChange} />

                    <br />
                    <button >post</button>
                </form>






            </div>
        )
    }
}



const Maptopropstopbar = (state) => {
    return {
        logvalue: state.loged
    }

}




export default connect(Maptopropstopbar, actionCreator)(withRouter(PostForm))
