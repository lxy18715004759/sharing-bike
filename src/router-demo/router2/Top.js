import React from "react"

import {Link} from "react-router-dom"

export default class Top extends React.Component{
    
    render(){
        return ( 
        <div> 
                <ul>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/top">top</Link>
                    </li>
                </ul>
                {this.props.children}
             </div>);
    }
}