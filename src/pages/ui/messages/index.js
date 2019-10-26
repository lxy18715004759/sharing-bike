import React from "react"
import {Card, Button,message} from "antd"
import "./../ui.less"
export default class Message extends React.Component{


    showMessage = (type)=>{

        message[type](type);
    }

    render(){

        return (
            <div>
                <Card title="全局提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage("loading")}>loading</Button>
                </Card>
            </div>
        );
    }
}