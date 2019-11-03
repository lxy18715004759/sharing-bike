import React from "react"
import {Card,Table, message,Badge,Button, Modal} from "antd"
import "./../table.less"
import axios from 'axios'
import Mock from "../../mock/index.js"

Mock.getBasicList()

export default class BasicTable extends React.Component{


    state={
        selectedRowKeys:[],
        loading:false
    }

    //动态获取mock数据
    require = ()=>{

        axios.get('/table/basicList').then((res) => {

            if(res.status===200 && res.data.code===0){
                this.setState({
                    dataSource1:res.data.result.list
                });

            }
        }).catch((err)=>{

            message.error(err);
        });
    }

    componentWillMount(){

        const dataSource = [
            {
                "id":1,
                "username":"张思",
                sex:"1",
                key:"11",
                age:12,
                isMarried:"否",
                address:"杭州",
                "working":"1"
            },
             {
                "id":2,
                "username":"李宁",
                sex:"1",
                 key: "22",
                age:13,
                isMarried:"否",
                address:"杭州",
                "working": "2"
            },
             {
                 "id": 3,
                 "username": "赵括",
                  key: "33",
                 sex: "2",
                 age: 24,
                 isMarried: "是",
                 address: "杭州",
                 "working": "1"
             },
              {
                  "id": 4,
                  "username": "刘志",
                   key: "44",
                  sex: "1",
                  age: 32,
                  isMarried: "是",
                  address: "杭州",
                  "working": "2"
              },
               {
                   "id": 5,
                   "username": "吴琴",
                    key: "55",
                   sex: "2",
                   age: 20,
                   isMarried: "否",
                   address: "杭州",
                   "working": "1"
               },
        ]
        this.setState({
            dataSource
        });

        this.require();

    }

    // 表格选中
    onSelectChange = (selectedRowKeys, item) => {

        console.log("onSelectChange", selectedRowKeys, item);
        this.setState({
            selectedRowKeys
        });
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
                title:"编号",
                align:"center",
                dataIndex:'id',
                key:"id",
                width:100
            },{
                title:"姓名",
                align: "center",
                key: "username",
                dataIndex:"username",
                width: 100
            },{
                title:"性别",
                dataIndex:"sex",
                align: "center",
                key:"sex",
                 width: 100,
                render:(sex)=>{
                    return sex==="1"?"男":"女";
                }
            },{
                title:"年龄",
                key:"age",
                align: "center",
                 width: 100,
                dataIndex:"age",
                sorter:(a,b)=>{
                    return a.age-b.age;
                }
            },
            {
                title:"是否已婚",
                align: "center",
                key:"isMarried",
                 width: 100,
                dataIndex:"isMarried"
            },{
                title:"住址",
                 width: 100,
                 align: "center",
                dataIndex:"address"
            },
            {
                title:"是否在职",
                key:"working",
                align: "center",
                 width: 100,
                dataIndex:"working",
                render:(working)=>{
                    return working==="1"?<Badge status="success" text="在职"></Badge>:<Badge status="error" text="离职"></Badge>;
                }
            },
             {
                     title:"操作",
                     align: "center",
                      width: 100,
                     render:(text,item)=>{
                         return <Button type="primary" size="small" onClick={()=>{this.handleRowDelete(item)}}>删除</Button>
                     }
                 }
        ]
        let columns1 = [
            {
                title:"id",
                dataIndex:"id",
                key:"id1",
                align:"center",
            },
             {
                 title: "姓名",
                 dataIndex: "userName",
                  key: "userName1",
                align:"center",
             },
              {
                  title: "性别",
                  dataIndex: "sex",
                    key: "sex1",
                        align: "center",
                  render:(sex)=>{

                    return sex==="1"?"男":"女"
                  }
              },
               {
                   title: "当前状态",
                   key: "state1",
                       align: "center",
                   dataIndex: "state",
                   render:(state)=>{

                    return state==="1"?"已婚":"未婚"
                  }
               },
                {
                    title: "兴趣",
                     key: "interest1",
                       align: "center",
                    dataIndex: "interest",
                },
                 {
                     title: "生日",
                     key: "birthdate1",
                       align: "center",
                     dataIndex: "birthdate"
                 },
                  {
                      title: "地址",
                      key: "address1",
                          align: "center",
                      dataIndex: "address"
                  },
                 {
                     title: "时间",
                      key: "time1",
                          align: "center",
                     dataIndex: "time"
                 },{
                     title:"操作",
                     align:"center",
                     render:(text,item)=>{

                        return <Button type="danger" size="small" onClick={()=>{this.handleRowDelete(item)}}>删除</Button>
                     }
                 }
                
        ]

        const {loading,selectedRowKeys} = this.state;

        const rowSelection={
            selectedRowKeys,
            onChange:this.onSelectChange
        }

        return (
            <div>
                <Card title="基础表格" className="card-wrap">

                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        rowSelection={rowSelection}
                    >

                    </Table>
                </Card>
                <Card title="动态表单" className="card-wrap">
                    <Table
                        columns={columns1}
                        dataSource={this.state.dataSource1}
                    >
                    </Table>
                </Card>
            </div>
        );
    }
}