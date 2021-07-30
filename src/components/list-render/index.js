/*
 * @Author: ryyyyy
 * @Date: 2021-04-14 11:08:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-14 14:28:48
 * @Description: Do not edit
 * @FilePath: /demo/src/components/list-render/index.js
 */
import Item from './item';
import React from 'react';
import {connect} from 'react-redux';
import item from './item';
import './index.module.scss';

const mapStateToProps = state => {
    return state;
}
const handleClick = id => ({
    type: 'active',
    id
})
const View = props => {
    const {items} = props;
    return <ul>
        {
            items && item.length && items.map(item => <Item
                key={item.id}
                isActive={item.isActive}
                value={item.id}
                click={props.handleClick}
            />)
        }
    </ul>
}

export default connect(mapStateToProps, {handleClick})(View);