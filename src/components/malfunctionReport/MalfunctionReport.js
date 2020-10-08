import React from 'react';
import './malfunctionReport.css';

const MalfunctionReport = function({ text, icon, onClickAction }){
    return (
        <div className="malfunction-card" onClick={onClickAction}>
            { icon }
            <h4 className="card-text">{text}</h4>
        </div>
    )
}

export default MalfunctionReport;