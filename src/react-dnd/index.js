/*
 * @Author: ryyyyy
 * @Date: 2021-07-14 17:33:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-15 20:35:07
 * @Description: Do not edit
 * @FilePath: /demo/src/react-dnd/index.js
 */
import React, { useState } from 'react';
import Box from './box';
import List from './list';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

const hBoxs = [
  { id: 1, category: 'Apple:h', bg: 'red', type: 'h' },
  { id: 2, category: 'Banana:h', bg: 'yellow', type: 'h' },
  { id: 3, category: 'Orange:h', bg: 'orange', type: 'h' }
]

const vBoxs = [
  { id: 4, category: 'Grape', bg: 'purple', type: 'v'},
  { id: 5, category: 'Watermelon', bg: 'green', type: 'v' },
  { id: 6, category: 'Peach', bg: 'pink', type: 'v' }
]

const boxs = hBoxs.concat(vBoxs);



export default props => {
  const [h2List, setH2List] = useState([]);
  const [hList, setHList] = useState([]);
  const [vList, setVList] = useState([]);
  const handleDragChange = (type, val) => {
    if (type === 'h') setHList([...val])
    else setVList([...val])
  }
  return <DndProvider backend={HTML5Backend}>
    <div>
      {
        boxs.map(item => <Box data={item.type === 'h' ? hList : vList}  key={item.id} {...item} change={handleDragChange} />)
      }
      <div style={{display: 'flex'}}>
        <List kind={'h'} type='h' data={hList} change={handleDragChange.bind(null, 'h')}/>
        {/* <List kind={2} type='h' data={h2List} change={handleDragChange.bind(null, 2)}/> */}
        <List kind={'v'} type='v' data={vList} change={handleDragChange.bind(null, 'v')}/>
      </div>
    </div>
  </DndProvider>

}