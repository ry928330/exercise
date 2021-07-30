/*
 * @Author: ryyyyy
 * @Date: 2021-04-14 11:08:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-14 14:56:16
 * @Description: Do not edit
 * @FilePath: /demo/src/components/list-render/item/index.js
 */
import React from 'react';

import styles from './index.module.scss';

const View = props => {
    const className = props.isActive ? styles.active:'';
    return <li
        className={className}
        onClick={props.click.bind(null, props.value)}>
            {props.value}
    </li>
}

export default View;