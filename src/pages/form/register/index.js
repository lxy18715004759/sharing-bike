import React from "react"
import {Card,Form, Button , Input ,Select,Icon,Radio, InputNumber, Switch,DatePicker,TimePicker,Upload} from "antd"
import moment from "moment"

class Register extends React.Component{


    render(){

        const FormItem = Form.Item;
        const RadioGroup = Radio.Group;
        const InputTextArea = Input.TextArea;
        const Option = Select.Option;
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        return (
            <div>
                
                <Card title="注册表单">

                    <Form layout="horizontal">

                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator("userName",{
                                    
                                    initialValue:"",
                                    rules:[
                                        {
                                            required:true,
                                            message:"请输入用户名!"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"></Icon>} type="text" placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>

                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator("password",{
                                    
                                    initialValue:"",
                                    rules:[
                                        {
                                            required:true,
                                            message:"请输入密码!"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"></Icon>} type="password" placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>   

                         <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator("sex",{
                                    
                                    initialValue:"",
                                    rules:[
                                      
                                    ]
                                })(
                                   <RadioGroup>
                                       <Radio value="1">男</Radio>
                                       <Radio value="2">女</Radio>
                                   </RadioGroup>
                                )
                            }
                        </FormItem>   
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator("age",{
                                    initialValue:18,
                                    rules:[]
                                })(
                                    <InputNumber></InputNumber>
                                )                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator("currentState",{
                                    initialValue:["1","2"],
                                    rules:[]
                                })(
                                    <Select mode="multiple"> 
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">知识青年</Option>
                                        <Option value="3">百度FE</Option>
                                        <Option value="4">文艺青年</Option>
                                        <Option value="5">创业者</Option>
                                        <Option value="6">风华浪子</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator("marry",{
                                    valuePropName:"checked",
                                    initialValue:true
                                })(
                                    <Switch></Switch>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator("birthdate",{
                                    initialValue:moment("2019-10-26"),
                                    rules:[]
                                })(
                                    <DatePicker 
                                    // showTime 
                                    // format="YYYY-MM-DD HH:mm:ss"
                                    ></DatePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址"  {...formItemLayout}>
                            {
                                getFieldDecorator("address",{
                                    initialValue:"",
                                    rules:[]
                                })(
                                    <InputTextArea 
                                        autoSize={
                                            {
                                                minRows:4,
                                                maxRows:6
                                            }
                                        }
                                    ></InputTextArea>
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator("time",{
                                    initialValue:moment("06:00:00","HH:mm:ss"),
                                    rules:[]
                                })(
                                    <TimePicker></TimePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label="上传头像" {...formItemLayout}>
                            {
                                getFieldDecorator("userImg",{
                                    initialValue:"",
                                    rules:[]
                                })(
                                    <Upload></Upload>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }

}

export default Form.create()(Register);