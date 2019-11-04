import React from "react"
import {Card,Button,Modal} from "antd"

import "./../ui.less"
export default class Modals extends React.Component{

    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }
    
    openModal = (modalMark)=>{

        this.setState({
            [modalMark]:true,
        });
    }

    closeModal1=()=>{
        this.setState({
            showModal1:false
        });
    }

    handleConfirm = (type)=>{

        Modal[type]({
            title:"删除",
            content:"确认删除？",
            onOk(){
                console.log("ok");
            },
            onCancel(){
                console.log("cancel");
            }
        });
    }


    render(){

        return (
        <div>
           <Card title="基础模态框" className="card-wrap">
                <Button type="primary" onClick={()=>{this.openModal("showModal1")}}>Open</Button>
                <Button type="primary" onClick={()=>{this.openModal("showModal2")}}>自定义页脚</Button>
                <Button type="primary" onClick={()=>{this.openModal("showModal3")}}>顶部20px弹框</Button>
                <Button type="primary" onClick={()=>{this.openModal("showModal4")}}>水平居中</Button>
           </Card>
           <Card title="信息确认框">
                <Button type="primary" onClick={()=>{this.handleConfirm("confirm")}}>confirm</Button>
                <Button type="primary" onClick={()=>{this.handleConfirm("info")}}>info</Button>
                <Button type="primary" onClick={()=>{this.handleConfirm("warning")}}>warning</Button>
                <Button type="primary" onClick={()=>{this.handleConfirm("success")}}>success</Button>
           </Card>
            
            <Modal
                visible={this.state.showModal1}
                title="open"
                onOk={this.closeModal1}
                onCancel={this.closeModal1}
            >
                <p>this is a modal!</p>
            </Modal>
            <Modal
                title="自定义页脚"
                visible={this.state.showModal2}
                okText="好的"
                cancelText="算了"
                onOk={()=>{
                    this.setState({
                        showModal2:false
                    });
                }}
                onCancel={()=>{
                     this.setState({
                        showModal2:false
                    });
                }}
            >
                <p>这是一个自定义页脚的modal(okText , cancelText属性值)</p>
                
            </Modal>

            <Modal
                style={{top:20}}                    // ui.less modal
                visible={this.state.showModal3}
                title="顶部20px弹窗"
                onOk={()=>{
                    this.setState({
                        showModal3:false
                    });
                }}
                onCancel={()=>{
                    this.setState({
                        showModal3:false
                    });
                }}
            >
                <p>这是一个顶部20px的modal</p>
            </Modal>

            <Modal
                title="水平垂直居中"
                wrapClassName="vertical-center-modal"
                visible={this.state.showModal4}
                onOk={()=>{
                    this.setState({
                        showModal4:false
                    });
                }}
                onCancel={
                    ()=>{
                        this.setState({
                            showModal4:false
                        });
                    }
                }
            >
                <p>水平垂直居中</p>
            </Modal>
        </div>);
    }
}