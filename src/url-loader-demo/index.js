/*
 * @Author: ryyyyy
 * @Date: 2021-04-27 10:49:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-27 16:01:43
 * @Description: Do not edit
 * @FilePath: /demo/src/url-loader-demo/index.js
 */
import React from 'react';
import './index.scss';
import imgurl from '../../resources/imgs/test.jpeg'

export default props => {
    return <div className="loader-demo">
        demo 123
        <img src={'../../resources/imgs/test.jpeg'}></img>
        <div className="img-bg"></div>
    </div>
}