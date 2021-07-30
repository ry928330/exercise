/*
 * @Author: ryyyyy
 * @Date: 2021-07-14 18:30:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-22 16:17:42
 * @Description: Do not edit
 * @FilePath: /demo/src/react-dnd/list.js
 */
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDrop } from "react-dnd";
import Card from "./card";
import update from "immutability-helper";

export default ({ data = [], type, change }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      }
    }
  });
  const style = useMemo(() => {
    const tempStyle = {
      border: "1px dashed gray",
      margin: "100px auto",
      minHeight: "300px",
      padding: "0 10px",
      width: 300,
      borderColor: canDrop ? "red" : "black",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };
    return tempStyle;
  }, [canDrop]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    /**
     * 1、如果此时拖拽的组件是 Box 组件，则 dragIndex 为 undefined，则此时修改，则此时修改 data 中的占位元素的位置即可
     * 2、如果此时拖拽的组件是 Card 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
     */
    if (dragIndex === undefined) {
      const lessIndex = data.findIndex((item) => item.id === -1);
      console.log(lessIndex, hoverIndex, 999)
      if (lessIndex === hoverIndex) return;
      const result = update(data, {
        $splice: [
          [lessIndex, 1],
          [hoverIndex, 0, { bg: "aqua", category: `${type}类型放这里`, id: -1, type }],
        ],
      })
      change(result);
    } else {
      const dragCard = data[dragIndex];
      change(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    }
  }, [data, type]);

  return (
    <div ref={drop} style={style}>
      {data.length ? (
        data.map((item, index) => (
          <Card 
            data={data} 
            moveCard={moveCard} 
            index={index} 
            key={item.id} 
            {...item} 
          />
        ))
      ) : (
        <span>请放入水果{type}</span>
      )}
    </div>
  );
};
