import React from "react";
import {Row,Col} from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";

import Home from "./pages/home"

import "./style/common.less"
class Admin extends React.Component{

    render(){
        return(<div>
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span="20" className="main">
                    <Header>header</Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer>footer</Footer>
                </Col>
            </Row>
        </div>);
    }
}

export default Admin;