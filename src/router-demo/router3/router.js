import React from "react"
import {HashRouter as Router ,Route} from "react-router-dom"

import Home from "./Home"
import About from './About'
import Order from './Order'

export default class IRouter extends React.Component{

    render(){

        return (
            <Router>
                <Home>
                    <Route path="/about" component={About}></Route>
                    <Route path="/order" render={()=>
                        <Order>
                            <Route path="/order/aaa" render={()=><div>aaa</div>}></Route>
                            <Route path="/order/bbb" render={()=><div>bbb</div>}></Route>
                            <Route path="/order/ccc" render={()=><div>ccc</div>}></Route>
                        </Order>
                    }></Route>
                </Home>
            </Router>
        );
    }
}