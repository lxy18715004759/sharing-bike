import React from "react"
import {Link} from 'react-router-dom'
export default class Home extends React.Component{

    render(){

        return (
            <div>
                <p>this is home</p>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/order">order</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}