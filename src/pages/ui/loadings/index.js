import React from "react"
import {Card,Button,Spin,Icon,Alert } from 'antd'
import "./../ui.less"
export default class Loading extends React.Component{

    render(){

        const icon = <Icon size="large" type="loading"></Icon>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin size="default"></Spin>
                    <Spin size="large" indicator={icon}></Spin>
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="我的世界"
                        description="欢迎来到我的世界"
                        type="info"
                    />
                     <Alert
                        message="我的世界"
                        description="欢迎来到我的世界"
                        type="warning"
                    />
                    <Spin>
                        <Alert
                            message="spin遮罩层"
                            description="loading中嵌套其他组件"
                            type="success"
                        >

                        </Alert>
                    </Spin>
                     <Spin tip="加载中...">
                        <Alert
                            message="spin遮罩层"
                            description="loading中嵌套其他组件"
                            type="error"
                        >

                        </Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}