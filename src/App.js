import React from 'react';
import MalfunctionsContainer from './components/malfunctionsContainer/MalfunctionsContainer';
import MalfunctionTypes from './types/MalfunctionTypes';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
    <div className="app">  
        <h2 className="title">Report Drone malfunction</h2>
        <MalfunctionsContainer malfunctionTypes={MalfunctionTypes} />
        <NotificationContainer/>
    </div>
  );
}

export default App;
    