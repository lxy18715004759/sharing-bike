import React from 'react'
import {Card,Form,Input, Button ,message,Icon,Checkbox} from 'antd'

import "./../form.less"

class Login extends React.Component{


    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}登陆成功！`);
            }
        });
    }

    render(){

        const FormItem = Form.Item;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">

                        <FormItem>
                            <Input type="text" placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="水平方向表单" className="card-wrap">
                    <Form layout="horizontal" style={{width:"300px"}}>
                        <FormItem>
                            {
                                getFieldDecorator("userName",{
                                    initialValue:'Jack',
                                    rules:[
                                        {
                                            required:true,
                                            message:"请输入用户名！"
                                        },
                                        {
                                            min:5,
                                            max:10,
                                            message:"长度不在范围内！"
                                        },
                                        // {
                                        //     pattern:new RegExp(/^\\w+$/,"g"),
                                        //     message:"不符合正则表达式!"
                                        // }
                                    ]
                                })(<Input prefix={<Icon type="user"></Icon>} type="text" placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("password",{
                                    initialValue:"",
                                    rules:[
                                        {
                                            required:true,
                                            message:"请输入密码！"
                                        }
                                    ]
                                })(<Input prefix={<Icon type="lock"></Icon>} type="password" placeholder="请输入密码"/>)
                            }
                            
                        </FormItem>

                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    valuePropName:"checked",
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码？</Checkbox>
                                )
                            }
                            <a href="#" style={{"float":"right"}}>忘记密码？</a>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Login);