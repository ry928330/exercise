/*
 * @Author: ryyyyy
 * @Date: 2021-03-02 10:55:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-24 14:40:38
 * @Description: Do not edit
 * @FilePath: /webpack/demo/src/components/demo/index.js
 */
// // import React from 'react';
// // // import './index.scss';
// // import imgSrc from '../../../resources/imgs/test.jpeg';
// // import styles from './index.module.scss';

// // export default props => {
// //     return <div className={styles.demo}>
// //             <div className={styles.title}>测试页面title</div>
// //             <div className={styles["img-container"]}>
// //                 <img src={imgSrc} />
// //             </div>
// //     </div>
// // }

// import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
// // const { promisify } = require('util');
// // const fs = require('fs');
// import heic2any from "heic2any";

// export default () => {
//   const [count, setCount] = useState(0);
//   const imgCurrent = useRef(null);

// let dataURLToBlob = (dataurl) => {
//     let arr = dataurl.split(','),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]),
//         n = bstr.length,
//         u8arr = new Uint8Array(n)
//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n)
//     }
//     return new Blob([u8arr], { type: mime })
// }
//   let handleInputChange = (e) => {
//       var imgFile = new FileReader();
//       try {
//         imgFile.onload = function (e) {
//             const blob = dataURLToBlob(this.result)
//             heic2any({
//                 blob,
//                 toType: "image/jpeg",
//                 quality: 0.5, // cuts the quality and size by half
//             })
//             .then((conversionResult) => {
//                 var url = URL.createObjectURL(conversionResult);
//                 imgCurrent.current.src = url;
//                 console.log(conversionResult, url, '............')
//             })
//         }
//         imgFile.readAsDataURL(e.target.files[0]);
//       } catch (err) {
//             console.log(err)
//       }
//   }

//   useLayoutEffect(() => {
//     if (count === 0) {
//       const randomNum = 10 + Math.random() * 200;

//       const now = performance.now();

//       while (performance.now() - now < 100) {}

//       setCount(randomNum);
//     }
//   }, [count]);

//   return <div onClick={() => setCount(0)}>
//       {count}
//       <img  ref={imgCurrent}/>
//       <input type="file" onChange={handleInputChange}></input>
//     </div>;
// };
import React, { useEffect, useState } from 'react';

export default props => {
    let [state, setState] = useState([1, 2]);
    useEffect(() => {
        console.log(state)
    },[state])
    return <div onClick={() => {
        console.log('dianji')
        state = state.slice();
        state[0] = Math.random();
        setState(state);
    }}>{state}点击测试</div>
}