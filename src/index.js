/*
 * @Author: ryyyyy
 * @Date: 2021-02-26 09:56:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-30 10:12:38
 * @Description: Do not edit
 * @FilePath: /exercise/src/index.js
 */

// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './app';

// ReactDom.render(
//     <App store={{count: 0}} />,
//     document.getElementById('root')
// )

// import * as Button from './app';
import * as Button from '../dist/js/index.4772';

console.log(Button, 777)

// import {observable, autorun} from 'mobx';

// var todoStore = observable({
//     /* 一些观察的状态 */
//     todos: [],

//     /* 推导值 */
//     get completedCount() {
//         return this.todos.filter(todo => todo.completed).length;
//     }
// });

// /* 观察状态改变的函数 */
// autorun(function() {
//     console.log("Completed %d of %d items",
//         todoStore.completedCount,
//         todoStore.todos.length
//     );
// });

// /* ..以及一些改变状态的动作 */
// setTimeout(() => {
//     todoStore.todos[0] = {
//         title: "Take a walk",
//         completed: false
//     };
// },[3000])

// setTimeout(() => {
//     todoStore.todos[0].completed = true;
// },[5000])

