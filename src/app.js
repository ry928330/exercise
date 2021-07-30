/*
 * @Author: ryyyyy
 * @Date: 2021-02-27 11:12:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-30 08:01:34
 * @Description: Do not edit
 * @FilePath: /demo/src/app.js
 */
// import React, { useEffect, useState } from 'react';
// import React from 'react';
// import './global.scss';
// import Layout from './components/layout';
// import Demo from './components/demo';
// import ListRender from './components/list-render';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// const itemsReducer = (state={items: []}, action) => {
//     let _state = Object.assign({}, state)
//     switch(action.type) {
//         case 'active':
//             _state.items = _state.items.map(item => {
//                 if (item.id === action.id) item.isActive = !item.isActive;
//                 return item;
//             })
//             break;
//     }
//     return _state;
// }

// const store = createStore(itemsReducer, {
//     items: new Array(10000).fill('').map((_, index) => {
//         return {
//             id: index + 1,
//             isActive: false
//         }

//     })
// });

// class App extends React.Component {
//     render() {
//         return <Provider store={store}>
//             <Layout title="列表渲染测试">
//                 hello webpack, seccess
//                 <ListRender />
//             </Layout>
//         </Provider>
//     }
// }

// import App from './components/context-container/index';

// export default App;

// import MobxDemo from './components/mobx';

// export default MobxDemo;

// import Demo from './url-loader-demo';

// export default Demo;

// import List from './virtural-list'
// export default List;

// import Index from './class-func-compare';

// export default Index;

// import Swiper from './swiper';
// export default Swiper;

// import ReactApiDemo from './react-api-demo';
// export default ReactApiDemo;

// import Demo from './dxz';
// export default Demo;

// import Svg from './svg';
// export default Svg;

// import DefinePluginDemo from './define-plugin-demo';

// export default DefinePluginDemo;
// import HelloCom from './hoc/hello.jsx';

// export default props => {
//   return <div>
//     app
//     <HelloCom />
//   </div>
// }

// import DndDemo from './react-dnd';

// export default DndDemo;

import Button from './export-demo';

export {
  Button
}


