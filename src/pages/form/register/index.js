import React from "react"
import {Card,Form, Button , Input ,Select,Icon,Radio, InputNumber, Switch,DatePicker,TimePicker,Upload,Checkbox,message} from "antd"
import moment from "moment"

class Register extends React.Component{


    state={
        imageUrl:"",
        loading:false,
    }

    getBase64=(img, callback)=>{
         const reader = new FileReader();
         reader.addEventListener('load', () => callback(reader.result));
         reader.readAsDataURL(img);
    }

    handleChange= (info)=>{
            if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                imageUrl,
                loading: false,
            }),
        );
        }
    }

    handleRegister=()=>{

        let info = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log("values",values);
                message.success("正在创建中...");
            }
        });
        console.log("info",info);
    }


    handleSwitch=(status)=>{
        message.info("Switch组件状态"+status);
    }

    handleRadio = (e)=>{
        message.info("radio");
        console.log("Radio",e.target.value);
    }

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

        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:20,
                    offset:4
                }
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
                                    
                                    initialValue:"1",
                                    rules:[
                                      
                                    ]
                                })(
                                   <RadioGroup
                                        options={
                                            [
                                                {
                                                    label: "男",
                                                    value:"1"
                                                },
                                                {
                                                    label:"女",
                                                    value:"2"
                                                }

                                            ]

                                        }
                                        onChange={
                                            this.handleRadio
                                        }
                                   >
                                       {/* <Radio value="1">男</Radio>
                                       <Radio value="2">女</Radio> */}
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
                                    <Switch
                                        onChange={this.handleSwitch}
                                    ></Switch>
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
                                    <InputTextArea></InputTextArea>
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
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.imageUrl?<img src={this.state.imageUrl} alt=""/>:<Icon type="plus"></Icon>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator("readered",{
                                    valuePropName:"checked",
                                    initialValue:true,
                                    rules:[]
                                })(
                                    <Checkbox>我已阅读相关协议</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleRegister}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }

}

export default Form.create()(Register);