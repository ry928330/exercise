/*
 * @Author: ryyyyy
 * @Date: 2021-04-28 10:31:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-09 18:45:11
 * @Description: Do not edit
 * @FilePath: /demo/src/virtural-list/index.js
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.scss';

const List = props => {
    
    let [offsetY, setOffsetY] = useState(0);
    let [startIndex, setStartIndex] = useState(0);
    const itemHeight = props.itemHeight || 50;
    const scrollContainer = useRef(null);
    const countsPerView = props.countsPerView || 8;
    const endIndex = useRef(startIndex + countsPerView);
    const listData = props.data || new Array(100).fill('').map((_, index) => index);
    const bufferScale = props.bufferScale || 0.2;
    const bufferValue = Math.round(bufferScale * countsPerView);

    let renderList = useMemo(() => {
        let start = startIndex - Math.min(startIndex, bufferValue),
            end = endIndex.current + Math.min(listData.length - endIndex.current, bufferValue);
        return listData.slice(start, end).map((item, index) => {
            return <span key={item+1} className="list-item" style={{height: itemHeight+'px'}}>{item+1}</span>
        })
    }, [startIndex])

    let handleScroll = (ev) => {
        const scrollTop = ev.target.scrollTop;
        startIndex = Math.floor(scrollTop / itemHeight);
        endIndex.current = startIndex + countsPerView;
        const newOffsetY = Math.max(scrollTop - (scrollTop%itemHeight) - bufferValue*itemHeight, 0) ;
        setOffsetY(newOffsetY);
        setStartIndex(startIndex)
    }
    useEffect(() => {
        scrollContainer.current.addEventListener('scroll', handleScroll);
    },[])

    let getInnerContainerStyle = useMemo(() => ({
        transform: `translate3d(0px, ${offsetY}px, 0px)`
    }),[offsetY]) 

    return <div className="roi-list">
        <div className="container-outer" style={{height: `${itemHeight*countsPerView}px`}} ref={scrollContainer}>
            <div className="list-scroll-place" style={{height: `${itemHeight*listData.length}px`}}></div>
            <div className="container-inner" 
                style={getInnerContainerStyle}
            >
                {
                    renderList
                }
            </div>
        </div>
        
    </div>
}

export default List;