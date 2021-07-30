/*
 * @Author: ryyyyy
 * @Date: 2021-04-18 13:33:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 10:21:33
 * @Description: Do not edit
 * @FilePath: /demo/src/components/mobx/index.js
 */
import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';


const Counter = observer(({store}) => {

    let handlePlus = () => {
        store.count++;
        console.log(store.count, 2222)
    }
    let handleMinus = () => {
        store.count--;
    }
    return <div>
        Counter: {store.count}<br />
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
    </div> 
})

// @observer class Counter extends React.Component {
//     @observable count = 0;

//     render() {
//         console.log(this.count)
//         return <div>
//             Counter: {this.count}<br />
//             <button onClick={this.handlePlus.bind(this)}>+</button>
//             <button onClick={this.handleMinus.bind(this)}>-</button>
//         </div>
//     }

//     handlePlus() {
//         this.count++;
//         console.log(this.count, '++')
//     }
//     handleMinus() {
//         this.count--;
//     }
// }

export default Counter;