import React from 'react';

import {Row,Col} from 'antd';
import Utils from "../../utils/utils";
import "./index.less";

import axios from "../../axios";

class Header extends React.Component{

    state = {
        city : "杭州",
        weather : "",
        dayPictureUrl : "",
    }
    componentWillMount(){

        this.setState({
            userName:"用户123"
        });
        
        setInterval(()=>{
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            });
        });

        this.getWeatherAPIData();    // 获取天气接口
    }

    getWeatherAPIData(){
        
        axios.jsonp({
            url: "http://api.map.baidu.com/telematics/v3/weather?location=" + encodeURIComponent(this.state.city) + "&output=json&ak=yIIX1GOPvfb03Zh4KFhYFnv9m5lI7czX",
        }).then((res)=>{
            
            let weatherData = res.results[0]["weather_data"][0];
            this.setState({
                weather: weatherData["weather"],
                dayPictureUrl: weatherData['dayPictureUrl']
            });
        }).catch((err) => {
        console.log(err);
        });
    }


    render(){
        return(<div className="header">
            <Row className="header-top">
                <Col span="24">
                    <span>欢迎，{this.state.userName}</span>
                    <a href="#">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                    首页
                </Col>
                <Col span="20" className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span className="weather-detail">
                        <img className="weather-img" src={this.state.dayPictureUrl} />
                        { this.state.weather }
                    </span>
                </Col>
            </Row>
        </div>);
    }
}

export default Header;