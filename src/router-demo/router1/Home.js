import React from "react"

import {HashRouter,Route,Link,Switch} from "react-router-dom";

import About from "./About"
import Other from "./Other"

export default class Home extends React.Component{

    render(){

        return (
          <HashRouter>
             <div>
                  <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">about</Link>
                  </li>
                  <li>
                      <Link to="/other"></Link>
                  </li>
              </ul>
              <Route path="/about" component={About}></Route>
              <Route path="/other" component={Other}></Route>
             </div>
          </HashRouter>
        );
    }
}