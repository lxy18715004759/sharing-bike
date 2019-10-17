import React from "react"
import {HashRouter as Router ,Route,Switch} from "react-router-dom"

import Home from "./Home"
import About from './About'
import Order from './Order'
import Info from "./Info"

import NoMatch from "./NoMatch"

export default class IRouter extends React.Component{

    render(){

        return (
            <Router>
                <Home>
                   <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/order" render={()=>
                            <Order>
                                <Route path="/order/:id" component={Info}></Route>
                            </Order>
                        }></Route>
                        <Route component={NoMatch}></Route>
                   </Switch>
                </Home>
            </Router>
        );
    }
}