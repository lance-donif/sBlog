'use client'
import React from 'react';
import {List} from 'react-virtualized';


const renderLen = 100;
let ListItem = [];
for(let i = 0;i < renderLen;i++) {
    ListItem.push(Math.random()+"aaa");
}

function rowRenderer({
 	// 这里可以理解成渲染的内容样式
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}){
    return (
        <div key={key} style={style}>
            {ListItem[index]}
        </div>
    );
}

function TrueList() {
    return (
        <List
        width={300}
        height={300}
        rowCount={ListItem.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
        overscanRowCount={20}
      />
    )
};

export default TrueList;
