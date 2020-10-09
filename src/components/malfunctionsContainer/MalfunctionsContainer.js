import React, { useState} from 'react';
import MalfunctionReport from '../malfunctionReport/MalfunctionReport';
import MalfunctionReportPopup from '../malfunctionReportPopup/MalfunctionReportPopup';
import axios from 'axios';
import config from '../../config';
import { NotificationManager } from 'react-notifications';
import './malfunctionsContainer.css';

const reportMalfunction = type => {
    axios.post(`${config.serverBaseUrl}/report`, {malfunctionType: type}).then(res => {
        NotificationManager.success(type, 'Malfunction reported:')
    }, err => {
        NotificationManager.error('faild to report malfunction', 'Something went wrong')
    })
}

const MalfunctionsContainer = function({ malfunctionTypes }) {
    const [ showPopup, setShowPopup ] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    if(!malfunctionTypes || !malfunctionTypes.length){
        return <div>No malfunction types found</div>
    }

    return (
        <div className="container">
            {   
                malfunctionTypes.map((malfunctionType, i) => {
                    return (    
                        <MalfunctionReport 
                            text={malfunctionType.text}
                            icon={ <malfunctionType.icon size="9rem" color="#ffa07a"/>}
                            onClickAction={ 
                                malfunctionType.type === 'custom' ?  
                                    togglePopup : reportMalfunction.bind(this, malfunctionType.type)
                            } 
                            key={i}>
                        </MalfunctionReport>
                    )
                })
            }
            { showPopup ? 
                <MalfunctionReportPopup 
                    closePopup={togglePopup} 
                    reportMalfunction={reportMalfunction}>
                </MalfunctionReportPopup> : null }
        </div>
    );
}

export default MalfunctionsContainer;