/*
 * @Author: ryyyyy
 * @Date: 2021-06-25 09:54:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-25 10:30:45
 * @Description: Do not edit
 * @FilePath: /demo/src/hoc/index.jsx
 */
import React, { useLayoutEffect, useRef } from 'react';

export const refHoc = (name) => {
  return (WrapperedComponent) => {
    return props => {
      const node = useRef(null)
      const inject = {
        ...props,
        name
      }
      useLayoutEffect(() => {
        console.log(node.current.state, 23333)
      }, [])
      return <div>
        <WrapperedComponent 
          {...inject}
          ref={(instance) => node.current = instance}
        />

      </div>
    }
  }
}
