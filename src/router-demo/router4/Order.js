import React from "react"

import {Link} from "react-router-dom"

export default class Order extends React.Component{

    render(){

        return (
            <div>
                this is order
                  <ul>
                    <li>
                        <Link to="/order/aaa">aaa</Link>
                    </li>
                    <li>
                        <Link to="/order/bbb">bbb</Link>
                    </li>
                    <li>
                        <Link to="/order/ccc">ccc</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}