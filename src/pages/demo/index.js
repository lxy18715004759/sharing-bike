import React from "react"
import './index.css'
import './index.less'

// import "antd/dist/antd.css"             //  全量加载css样式 (使用babel-plugin-import插件实现按需加载)
import {Button,DatePicker} from 'antd';

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
            < DatePicker></DatePicker>
            <Button>点击一下</Button>
        </div>);
    }
};

export default Demo;