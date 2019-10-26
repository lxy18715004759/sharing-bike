import React from "react"
import {Carousel, Card} from "antd"

import "./../ui.less"
import './index.css'

export default class MyCarousel extends React.Component{

    render(){
        return (
            <div>
                
                <Card title="图片背景轮播" className="card-wrap">
                    
                    <Carousel autoplay>
                        <div>
                            <h3>Ant Motion Banner  --React</h3>
                        </div>
                        <div><h3>Ant Motion Banner  --Vue</h3></div>
                        <div><h3>Ant Motion Banner  --Angluar</h3></div>
                    </Carousel>
                </Card>


                <Card title="图片轮播" className="card-wrap">

                    <Carousel autoplay effect="fade" className="carousel-imgcontainer">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" />
                        </div>
                         <div>
                            <img src="/carousel-img/carousel-2.jpg" />
                        </div>
                         <div>
                            <img src="/carousel-img/carousel-3.jpg" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}