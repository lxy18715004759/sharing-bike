import React from "react"
import {Card,Table, message} from "antd"
import "./../table.less"
import axios from 'axios'

export default class BasicTable extends React.Component{


    state={}

    //动态获取mock数据
    require = ()=>{

        let baseUrl = "https://www.easy-mock.com/mock/5db45f9520dfdd7f0fe88096/table";
        axios.get(baseUrl+'/list').then((res)=>{

            if(res.status===200 && res.data.code===0){
                this.setState({
                    dataSource1:res.data.result
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
                sex:"男",
                age:12,
                isMarried:"否",
                address:"杭州"
            },
             {
                "id":2,
                "username":"李宁",
                sex:"男",
                age:13,
                isMarried:"否",
                address:"杭州"
            },
             {
                 "id": 3,
                 "username": "赵括",
                 sex: "男",
                 age: 24,
                 isMarried: "是",
                 address: "杭州"
             },
              {
                  "id": 4,
                  "username": "刘志",
                  sex: "男",
                  age: 32,
                  isMarried: "是",
                  address: "杭州"
              },
               {
                   "id": 5,
                   "username": "吴琴",
                   sex: "女",
                   age: 20,
                   isMarried: "否",
                   address: "杭州"
               },
        ]
        this.setState({
            dataSource
        });

        this.require();

    }

    render(){

        const columns = [
            {
                title:"id",
                dataIndex:'id'
            },{
                title:"姓名",
                dataIndex:"username"
            },{
                title:"性别",
                dataIndex:"sex"
            },{
                title:"年龄",
                dataIndex:"age"
            },
            {
                title:"是否已婚",
                dataIndex:"isMarried"
            },{
                title:"住址",
                dataIndex:"address"
            }
        ]
        const columns1 = [
            {
                title:"id",
                dataIndex:"id"
            },
             {
                 title: "姓名",
                 dataIndex: "userName"
             },
              {
                  title: "性别",
                  dataIndex: "sex"
              },
               {
                   title: "当前状态",
                   dataIndex: "state"
               },
                {
                    title: "兴趣",
                    dataIndex: "interest"
                },
                 {
                     title: "生日",
                     dataIndex: "birthdate"
                 },
                  {
                      title: "地址",
                      dataIndex: "address"
                  },
                 {
                     title: "时间",
                     dataIndex: "time"
                 },
        ]


        return (
            <div>
                <Card title="基础表格" className="card-wrap">

                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
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