import React from "react"
import {Card,Button, Radio} from "antd"

import "./../ui.less"
export default class Buttons extends React.Component{

    state = {
        loading:true,
        btnSize: "default",
    }

    handleOpenLoading=()=>{

        this.setState({
            loading: this.state.loading === true ? false : true,
        });
    }

    handleCloseLoading = ()=>{

        this.setState({
            loading:this.state.loading === true ? false : true,
        });
    }
    handleBtnsSize = (e)=>{
        
        console.log(e.target.value);
        this.setState({
            btnSize: e.target.value
        });
    }

    render(){

        return (
        <div>
           <Card title="基础按钮" className="card-wrap">
                <Button type="primary">按钮</Button>
                <Button>按钮</Button>
                <Button type="dashed">按钮</Button>
                <Button type="danger">按钮</Button>
                <Button disabled>按钮</Button>
           </Card>
           <Card title="图形按钮" className="card-wrap">
                <Button icon="plus">创建</Button>
                <Button icon="edit">编辑</Button>
                <Button icon="delete">删除</Button>
                <Button shape="circle" icon="search"></Button>
                <Button type="primary" icon="search">搜索</Button>
                <Button type="primary" icon="download">按钮</Button>
           </Card>

           <Card title="Loading 按钮" className="card-wrap">
                <Button type="primary" loading={this.state.loading}>确定</Button>
                <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                <Button loading={this.state.loading} onClick={this.handleOpenLoading}>点击加载</Button>
                <Button type="default" shape="circle" loading={this.state.loading}></Button>
                <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
           </Card>
           <Card title="按钮组" className="card-wrap">
                <Button.Group>
                    <Button icon="left">返回</Button>
                    <Button icon="right">前进</Button>
                </Button.Group>
           </Card>
           <Card title="按钮尺寸" >
                
                <Radio.Group onChange={this.handleBtnsSize} defaultValue="default">
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>
                    
                </Radio.Group>

                <Button size={this.state.btnSize} type="primary">primary</Button>
                <Button size={this.state.btnSize} type="dashed">dashed</Button>
                <Button size={this.state.btnSize} type="danger">danger</Button>
                <Button size={this.state.btnSize} disabled>disabled</Button>
                
           </Card>
        </div>);
    }
}