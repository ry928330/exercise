import React from 'react';
import './index.scss';

const View = props => {
    return <div className="layout-container">
        <h1>{props.title}</h1>
        <div className="content">{props.children}</div>
    </div>
}

export default View;