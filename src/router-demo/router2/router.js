import React from "react"
import {Link,Route,HashRouter as Router,Switch} from "react-router-dom"

import Top from "./Top"
import About from "./About"
export default class IRouter extends React.Component{

    render(){

        return (
           <Router>
               <Top>
                   <Route path="/top" component={Top}></Route>
                   <Route path="/about" render={()=>{
                    return (<About>
                        <Route path="/about/a" render={()=><div>aaaaaaaa</div>}></Route>
                    </About>);
                }}></Route>
               </Top>
           </Router>
        );
    }
}