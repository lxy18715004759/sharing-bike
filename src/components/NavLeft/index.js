import React from "react"

import {Menu} from "antd";
import MenuConfig from "./../../config/menuConfig"
import {Link} from "react-router-dom"

import "./index.less";
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component{

    componentWillMount(){

        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
    // 渲染菜单
    renderMenu = (data)=>{

        return data.map((item)=>{

            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item title={item.title} key={item.key}><Link to={"/admin"+item.key}>{item.title}</Link></Menu.Item>);
        })
    }

    render(){
        return (<div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Imooc MS</h1>
            </div>
            
            <Menu theme="dark">
                {this.state.menuTreeNode}
            </Menu>
        </div>);
    }
}

export default NavLeft;