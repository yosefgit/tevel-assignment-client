import React, { useState } from 'react';
import './malfunctionReportPopup.css';

const MalfunctionReportPopup = function({ closePopup, reportMalfunction}){
    const [ message, setMessage ] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = () => {
        closePopup();
        reportMalfunction(message)
    }

    return (
        <div className="popup">
            <div className="popup-body">
                <div className="popup-header"> 
                    <h3 className="popup-title">Enter malfunction message</h3>
                    <div className="close-button" onClick={ closePopup }>x</div>
                </div>
                <div className="popup-content"> 
                    <input autoFocus className="popup-input" type="text" value={message} onChange={ handleChange }/>
                    <button className="submit-button" onClick={handleSubmit} disabled={message === ''}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default MalfunctionReportPopup;