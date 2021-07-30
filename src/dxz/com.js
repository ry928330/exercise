/*
 * @Author: ryyyyy
 * @Date: 2021-05-25 11:54:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-25 11:55:30
 * @Description: Do not edit
 * @FilePath: /demo/src/dxz/com.js
 */
import React,{useState} from 'react';

export default prop => {
    const [abc, setAbc] = useState('');
    console.log(prop.name, abc)
    const handleComClick = () => {
        setAbc(+new Date());
    }
    return <div>
        <p onClick={handleComClick}>click</p>
        <p>{abc}</p>
        <p>{prop.val}</p>
    </div>
}