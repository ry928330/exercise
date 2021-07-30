/*
 * @Author: ryyyyy
 * @Date: 2021-07-14 18:51:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-15 19:32:01
 * @Description: Do not edit
 * @FilePath: /demo/src/react-dnd/card.js
 */
import React, { useRef, useMemo, useLayoutEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

export default ({ category, id, type, index, bg, moveCard, data }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type,
    item: {
      index
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: type,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // 拖拽元素下标与鼠标悬浮元素下标一致时，不进行操作
      if (dragIndex === hoverIndex) {
        return;
      }

      // 确定屏幕上矩形范围
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // 获取中点垂直坐标
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // 确定鼠标位置
      const clientOffset = monitor.getClientOffset();

      // 获取距顶部距离
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      /**
       * 只在鼠标越过一半物品高度时执行移动。
       *
       * 当向下拖动时，仅当光标低于50%时才移动。
       * 当向上拖动时，仅当光标在50%以上时才移动。
       *
       * 可以防止鼠标位于元素一半高度时元素抖动的状况
       */
      // 向下拖动
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // 向上拖动
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // 执行 move 回调函数
      moveCard(dragIndex, hoverIndex);
      /**
       * 如果拖拽的组件为 Box，则 dragIndex 为 undefined，此时不对 item 的 index 进行修改
       * 如果拖拽的组件为 Card，则将 hoverIndex 赋值给 item 的 index 属性
       */
      if (item.index !== undefined) {
        item.index = hoverIndex;
      }
    },
  });

  const style = useMemo(
    () => ({
      backgroundColor: bg,
      width: 120,
      height: 30,
      opacity: id === -1 ? 0.4 : isDragging ? 0.2 : 1,
      cursor: 'move',
      marginBottom: 10
    }),
    [bg, id, isDragging]
  );
  drag(drop(ref));
  return (
    <div style={style} ref={ref}>
      {category}
    </div>
  );
};
