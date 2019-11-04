import React from "react"

export default class Info extends React.Component{

    render(){

        return (
            <div>
                这里是动态路由实例:
                <br/>
                动态路由的值为：{this.props.match.params.id}
            </div>
        );
    }
}