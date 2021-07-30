/*
 * @Author: ryyyyy
 * @Date: 2021-05-25 11:25:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-25 12:01:20
 * @Description: Do not edit
 * @FilePath: /demo/src/dxz/index.js
 */
import React, { useState, useMemo } from 'react';
// import Com from './com';

export default props => {
    const [arr, setArr] = useState([{id: 1, val: 1}])
    const Com = useMemo(() => {

    }, [])
    // const Com = prop => {
    //     const [abc, setAbc] = useState('');
    //     console.log(prop.name, abc)
    //     const handleComClick = () => {
    //         setAbc(+new Date());
    //     }
    //     return <div>
    //         <p onClick={handleComClick}>click</p>
    //         <p>{abc}</p>
    //         <p>{prop.val}</p>
    //     </div>
    // }

    const handleClick = () => {
        setArr(JSON.parse(JSON.stringify(arr)).concat({id: 2, val: + new Date()}))
    }

    let render = useMemo(() => {
        return arr.map((item, index) => <Com key={item.id} val={item.val} name={item.id}/>)
    },[arr])

    return <div>
        <p onClick={handleClick}>+</p>
        {
            render
        }
        {/* {
            arr.map((item, index) => {
                return <Com key={item.id} val={item.val} name={item.id}/>
            })
        } */}
    </div>
}