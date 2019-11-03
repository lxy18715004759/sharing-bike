import Jsonp from "jsonp";
import axios from "axios"
import { message } from "antd";
export default class Axios{

    static jsonp(options){
        return new Promise((resolve,reject)=>{
            Jsonp(options.url,{
                param:"callback"
            },function(err,response){

                if(response.status === "success"){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            });

        });
    }

    static ajax(options){

        const baseUrl = "http://localhost:3000"
        return new Promise((resolve,reject)=>{

            axios({
                method:options.method|"get",
                baseURL: baseUrl + options.url,
                // auth:{
                //   username:"",
                //   password:''  
                // },
                url:options.url|"",
                data:options.data,
                timeout:5000
            }).then((res)=>{

                if(res.status===200){                   //axios 中自带的状态值

                    if(res.data.code=="0"){             // 业务层 定义的状态值
                        resolve(res);
                    }else{
                        
                        message.error("接口错误");
                    }
                }else{
                    reject(res.data);
                }
            })
        });
    }
}