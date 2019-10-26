import React from "react"
import {Card, notification, Button,} from "antd"
import "./../ui.less"
export default class Notification extends React.Component{

    openNotification = (type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            });
        }
        notification[type]({
            message:"还贷款了",
            description:"请于指定日期还贷。",
        });
    }

    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success',"topLeft")}>success</Button>
                    <Button type="info" onClick={()=>this.openNotification("info","topRight")}>info</Button>
                    <Button type="warning" onClick={()=>this.openNotification("warning","bottomLeft")}>warning</Button>
                    <Button type="error" onClick={()=>this.openNotification("error","bottomRight")}>error</Button>
                </Card>
            </div>
        );
    }
}