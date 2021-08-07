import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Topbar from './topbar/Topbar';
import Home from './pages/Home/Home';
import L1 from './pages/login/Login';
import Regiister from './pages/register/Register';
import { Component } from 'react';
import { connect } from "react-redux"
import * as actionCreator from "./ActionCreater/Authdis"
import postform from './form/postform';

class App extends Component {
  componentDidMount() {
    this.props.load_u()
  }




  render() {
    console.log("this is props", this.props)
    return (
      <BrowserRouter>
        <Topbar />
        <Route exact path="/" component={Home} >
        </Route>
        <Route path="/login" component={L1}>
        </Route>
        <Route path="/register" component={Regiister}>
        </Route>
        <Route path="/write" component={postform}>
        </Route>
      </BrowserRouter >

    );
  }
}


const MapstoProps = (state) => {
  return {
    logvalue: state.loged,
  }

}




export default connect(MapstoProps, actionCreator)(App);
