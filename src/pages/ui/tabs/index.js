import React from "react"
import {Card, Button,Tabs,message,Icon} from "antd"
import "./../ui.less"
export default class myTabs extends React.Component{

    newTabIndex = 0
    constructor(props){
        super(props);
        this.state={
            panes:[],
            activeKey: ""
        }
    }

    componentWillMount(){

        const panes=[
                 {
                    title:"Tab 1",
                    content:"Tab pane 1",
                    key:'1'
                },
                {
                    title:"Tab 2",
                    content:"Tab pane 2",
                    key:'2'
                },
                {
                    title:"Tab 3",
                    content:"Tab pane 3",
                    key:'3'
                },
            ]

        this.setState({
            panes,
           activeKey:panes[0].key
        });
    }

    handleCallback = (key)=>{

        message.info("您现在在Tabs标签页"+key);
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab'+this.newTabIndex, content: 'New Tab Pane'+this.newTabIndex, key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  onChange=(activeKey )=>{

    this.setState({
        activeKey
    });
  }

    render(){

        const TabPane = Tabs.TabPane;

        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                   <Tabs defaultKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Tabs标签页 1 </TabPane>
                        <TabPane tab="Tab 2" key="2">Tabs标签页 2 </TabPane>
                        <TabPane tab="Tab 3" key="3">Tabs标签页 3 </TabPane>
                   </Tabs>
                </Card>

                 <Card title="Tab带图标页签" className="card-wrap">
                   <Tabs defaultKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Tabs标签页 1 </TabPane>
                        <TabPane tab={<span><Icon type="edit"></Icon>Tab 2</span>} key="2">Tabs标签页 2 </TabPane>
                        <TabPane tab={<span><Icon type="delete"></Icon>Tab 3</span>} key="3">Tabs标签页 3 </TabPane>
                   </Tabs>
                </Card>

                <Card title="动态Tab 页签" className="card-wrap">
                   <Tabs 
                   activeKey={this.state.activeKey}
                   defaultKey="1" 
                   onChange={this.onChange} 
                   type="editable-card" 
                   onEdit={this.onEdit}
                   >
                       {
                           this.state.panes.map((item)=>{
                                return <TabPane tab={<span><Icon type="circle"></Icon>{item.title}</span>} key={item.key}>{item.content}</TabPane>
                           })
                       }
                   </Tabs>
                </Card>
            </div>
        );
    }
}