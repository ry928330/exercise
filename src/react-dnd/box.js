/*
 * @Author: ryyyyy
 * @Date: 2021-07-14 17:38:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-16 10:49:13
 * @Description: Do not edit
 * @FilePath: /demo/src/react-dnd/box.js
 */
import React from "react";
import { useDrag } from "react-dnd";

let id = 1;

export default ({ category, bg, type,kind, change, data = [] }) => {
  const style = {
    background: bg,
    marginBottom: 20,
    cursor: "move",
    width: 120,
    height: 30,
  };
  const [{ isDragging }, drag, preview] = useDrag({
    type,
    item: (monitor) => {
      const useless = data.find((item) => item.id === -1);
      if (!!!useless) {
        //如果里面没有占位的
        change(type, [
          { bg: "aqua", category: `${type}类型放这里`, id: -1, type},
          ...data,
        ]);
      }
      return {
        bg,
        category,
        type
      }
    },
    end: (item, monitor) => {
      const uselessIndex = data.findIndex((item) => item.id === -1);
      if (monitor.didDrop()) {
        //真正放在了目标位置
        data.splice(uselessIndex, 1, { ...item, id: id++ });
      } else {
        //没有放在目标位置，则去除占位
        data.splice(uselessIndex, 1);
      }
      change(type, data);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={preview} style={{...style, opacity: isDragging ? 0.4 : 1, width: !isDragging?60: 120}}>
      <div ref={drag} style={style}>
        {category}
      </div>
    </div>
  );
};
