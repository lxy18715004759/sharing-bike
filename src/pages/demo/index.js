import React from "react"
import './index.css'

class Demo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name : 'demo',
            title: "demo-title" 
        }
    }

    render(){
        return (<div className="context">
            <p>{this.state.name}组件测试：</p>
            <h3>{this.state.title}</h3>
        </div>);
    }
};

export default Demo;