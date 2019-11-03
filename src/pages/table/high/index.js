import React from "react"

import "./index.less";
import "./../table.less"

import {Button ,Card, message , Modal, Table } from "antd"
import axios from "axios"
import Mock from "../../mock/index.js"
Mock.getHighList();




export default class  HighTable extends React.Component{

    state = {


    }

    componentWillMount(){

        this.require();
    }

    require=()=>{

        axios.get("/table/highList").then((res)=>{

            this.setState({
                dataSource:res.data.result.list
            });

        }).catch((err)=>{

            console.log(err);
        })
    }


     //删除记录
    handleRowDelete=(item)=>{

        Modal.confirm({
            title:"确认删除？",
            content:`您想要删除${item.userName||item.username}`,
            onOk:()=>{
                message.info("删除中...");

                this.require();
            },
            onCancel:()=>{

            }
        });
    }


    render(){
        
 let columns = [
              {
                title:"id",
                dataIndex:"id",
                align:"center",
                display:"block",
                fixed: "left",
                key:"id",
                width: 100,
                ellipsis:true,
                
            },
             {
                 title: "姓名",
                 width: 100,
                 ellipsis:true,
                 align: "center",
                     key: "userName",
                 dataIndex: "userName"
             },
              {
                  title: "性别",
                  dataIndex: "sex",
                    align: "center",
                     key: "sex",
                  width: 100,
                  ellipsis:true,
                  render:(sex)=>{

                    return sex==="1"?"男":"女"
                  }
              },
               {
                   title: "当前状态",
                     align: "center",
                     key: "state1",
                   width:200,
                   ellipsis:true,
                   dataIndex: "state",
                   render:(state)=>{

                    return state==="1"?"已婚":"未婚"
                  }
               },
                {
                    title: "兴趣",
                      align: "center",
                     key: "interest1",
                    width: 100,
                    ellipsis:true,
                    dataIndex: "interest",
                },
                 {
                     title: "生日",
                       align: "center",
                     key: "birthdate1",
                     width: 200,
                     ellipsis:true,
                     dataIndex: "birthdate"
                 },
                  {
                      title: "地址",
                    align: "center",
                     key: "address1",
                      width: 100,
                      ellipsis:true,
                      dataIndex: "address"
                  },
                 {
                     title: "时间",
                     width: 100,
                     ellipsis:true,
                     align: "center",
                     key: "time1",
                     dataIndex: "time"
                 },
                 {
                     title: "文化程度",
                     width: 200,
                     ellipsis: true,
                     align: "center",
                     key: "edu",
                     dataIndex: "edu"
                 },
                 {
                     title: "年收入",
                     width: 200,
                     ellipsis: true,
                     align: "center",
                     key: "money",
                     dataIndex: "money"
                 },
                {
                     title: "健康状况",
                     width: 200,
                     ellipsis: true,
                     align: "center",
                     key: "heatly",
                     dataIndex: "heatly"
                },
                {
                      title: "有无儿女",
                     width: 200,
                     ellipsis: true,
                     align: "center",
                     key: "child",
                     dataIndex: "child"
                },
                 {
                     title: "有无黑名单",
                     width: 300,
                     ellipsis: true,
                     align: "center",
                     key: "badRecord",
                     dataIndex: "badRecord"
                 },
                  {
                      title: "监护人",
                      width: 200,
                      ellipsis: true,
                      align: "center",
                      key: "father",
                      dataIndex: "father"
                  },
                 {
                     title:"操作",
                     align:"center",
                     fixed:"right",
                     key: "opteration",
                     render:(text,item)=>{

                        return <Button type="danger" size="small" onClick={()=>{this.handleRowDelete(item)}}>删除</Button>
                     }
                 }
    ]


        let columns1 = [
              {
                title:"id",
                dataIndex:"id",
                align:"center",
                display:"block",
                key:"id",
                width: 100,
                
            },
             {
                 title: "姓名",
                 width: 100,
                 align: "center",
                     key: "userName",
                 dataIndex: "userName"
             },
              {
                  title: "性别",
                  dataIndex: "sex",
                    align: "center",
                     key: "sex",
                  width: 100,
                  render:(sex)=>{

                    return sex==="1"?"男":"女"
                  }
              },
               {
                   title: "当前状态",
                     align: "center",
                     key: "state",
                   width: 100,
                   dataIndex: "state",
                   render:(state)=>{

                    return state==="1"?"已婚":"未婚"
                  }
               },
                {
                    title: "兴趣",
                      align: "center",
                     key: "interest",
                    width: 100,
                    dataIndex: "interest",
                },
                 {
                     title: "生日",
                       align: "center",
                     key: "birthdate",
                     width: 100,
                     dataIndex: "birthdate"
                 },
                  {
                      title: "地址",
                    align: "center",
                     key: "address",
                      width: 100,
                      dataIndex: "address"
                  },
                 {
                     title: "时间",
                     width: 100,
                     align: "center",
                     key: "time",
                     dataIndex: "time"
                 },
                 {
                     title:"操作",
                     align:"center",
                     key: "opteration",
                     render:(text,item)=>{

                        return <Button type="danger" size="small" onClick={()=>{this.handleRowDelete(item)}}>删除</Button>
                     }
                 }
    ]

     let a = 0;
        columns.map((item)=>{
            return item.key= ++a;
        });
         columns1.map((item) => {
             return item.key = ++a;
         });
        return (
            <div>
                <Card title="横向滚动条" className="card-wrap">

                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns}
                        scroll={{x:1400}}
                    >

                    </Table>
                </Card>

                <Card title="纵向滚动条" className="card-wrap">
                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns1}
                        scroll={{y:285}}
                    >

                    </Table>
                </Card>
            </div>
        );
    }

}
