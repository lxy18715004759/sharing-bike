import React from 'react'
import "./../../style/common.less"

import {Card,Button,Form,Table,message, Select,Modal} from "antd";

import Axios from "./../../axios/index"

import Utils from "./../../utils/utils"

import Mock from "./../mock/index"
Mock.getCityList();

Mock.getOpenCity();


const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component{

    state ={
        dataSource:[],
        openCityVisible:false,
    }

    componentDidMount(){

        this.request();
    }


    request=()=>{


      Axios.ajax({
          url:"/city/list"
      }).then((res)=>{

        this.setState({
            dataSource: res.data.result.list.map((item)=>{
                item.key = item.city_id;
                return item;
            })
        });
         
      });
    }

    
    handleOpenCityModalOk=()=>{
        this.setState({
            openCityVisible:false,
        });

         let openCityModalInfo = this.openCityModal.props.form.getFieldsValue();
         console.log("openCItyModalInfo", openCityModalInfo);

         Axios.ajax({
             url:"/city/openCity",
             data:openCityModalInfo,
         }).then((res)=>{
            message.info("开通成功！");
            this.request();
         });
    }

    //开通城市
    handleOpenCity=()=>{

        // message.info("查询开通城市...");
        this.setState({
            openCityVisible:true,
        });

    }

    render(){
        const columns = [
            {
                title:"城市名称",
                dataIndex:"city_name",
                align:"center",
                key: "city_name",
            },
            {
                title:"用车模式",
                dataIndex:"mode",
                align:"center",
                key:"mode",
                render(mode){
                    return mode==="1"?"停车区模式":"禁停区模式";
                }
            },
            {
                title:"运营模式",
                dataIndex:"op_mode",
                align:"center",
                key:"op_mode",
                render(op_mode){
                    return op_mode==="1"?"自营":"加盟";
                }

            },
            {
                title:"授权加盟商",
                dataIndex: "frachisee_name",
                align:"center",
                key:"franchisee_name"
            },{
                title:"城市管理员",
                dataIndex:"city_admins",
                align:"center",
                key:"city_admins",
                render(item){
                    return item.map((v)=>{
                     return v.username
                    }).join(",");
                }
            },{
                title:"城市开通时间",
                dataIndex:"open_time",
                align:"center",
                key:"open_time",
            },
            {
                title:"操作时间",
                dataIndex:"update_time",
                align:"center",
                key:"update_time",
                 render(update_time) {

                     return Utils.formateDate(update_time);
                 }
            },{
                title:"操作人",
                dataIndex:"sys_user_name",
                align:"center",
                key:"sys_user_name"
            }
        ]
        return (
            <div>
                <Card>
                    <HeaderForm></HeaderForm>
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                    <Modal
                        visible={this.state.openCityVisible}
                        title="开通城市"
                        onOk={this.handleOpenCityModalOk}
                        onCancel={()=>{
                            this.setState({
                                openCityVisible:false
                            });
                        }}
                    >

                        <OpenCityForm wrappedComponentRef={(inst)=>{this.openCityModal=inst}}/>
                    </Modal>
                </Card>
               <div className="table-content-wrap">
                    <Table
                        
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                    >
                        
                    </Table>
               </div>
            </div>
        );
    }
}

class FilterForm extends React.Component{


        handleSearch = () => {
            message.info("查询中...");
        }
        handleReset = () => {
            this.props.form.resetFields();
            message.info("重置");
        }
        handleCity = (v) => {

            console.log("city:",v);
            message.info("查询城市：" + v)
        }

    render(){
        const formItemLayout = {

            labelCol:{
                xs:{
                    span:24
                },
                sm:{
                    span:4
                }
            },
            wrapperCol:{
                xs:{
                    span:24
                },
                sm:{
                    span:6
                }
            }
        }
        const {getFieldDecorator} = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator("city_id",{
                           
                        })(
                            <Select placeholder="请选择"
                                style={{width:"100px"}}
                                onSelect={this.handleCity}
                            >
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">上海市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator("mode")(
                            <Select placeholder="请选择"
                                style={{width:"100px"}}
                            >
                                <Option value="1">全部</Option>
                                <Option value="2">运行区模式</Option>
                                <Option value="3">禁止区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="运营模式">
                    {
                        getFieldDecorator("op_mode")(
                            <Select placeholder="请选择"
                             style={{width:"120px"}}
                            >
                                <Option value="1">全部</Option>
                                <Option value="2">自营模式</Option>
                                <Option value="3">加盟模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator("auth_status")(
                            
                            <Select placeholder="请选择"
                             style={{width:"100px"}}
                            >
                                <Option value="1">全部</Option>
                                <Option value="2">已授权</Option>
                                <Option value="3">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" onClick={this.handleSearch}>查询</Button>
                    <Button type="info" onClick={this.handleReset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

let HeaderForm = Form.create()(FilterForm);

class openCityFormClass extends React.Component{

    render(){

        const {getFieldDecorator} = this.props.form;

        const FormItemLayout = {

            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }

        return(
            <Form layout="horizontal">
                <FormItem label="开通城市" {...FormItemLayout}>
                    {
                        getFieldDecorator("openCity_modal_openCity",{
                            initivalValue:"1",
                            rules:[]
                        })(
                            <Select style={{width:300}}>
                                <Option value="1">北京</Option>
                                <Option value="2">上海</Option>
                                <Option value="3">南京</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式" {...FormItemLayout}>
                    {
                        getFieldDecorator("openCity_modal_mode",{
                            initivalValue:"1",
                            rules:[]
                        })(
                            <Select style={{width:300}}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式" {...FormItemLayout}>
                    {
                        getFieldDecorator("openCity_modal_op_mode",{
                            initivalValue:"1",
                            rules:[]
                        })(
                            <Select style={{width:300}}>
                                <Option value="1">禁停区模式</Option>
                                <Option value="2">停车区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}

let OpenCityForm = Form.create()(openCityFormClass);