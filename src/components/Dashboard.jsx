import React from 'react';
import {Outlet} from 'react-router-dom';
import './Dashboard.css';
import giraffePre from '../assets/giraffePre.png';
import cow from '../assets/cow.png';
import bear from '../assets/bear.png'
import title from '../assets/title.png';
import subtitle from '../assets/subtitle.png'
import intro from '../assets/intro.png'
import Play from './Play';
function Dashboard() {
    return (
        <div>
            <Outlet />
            <img src={giraffePre} width={900}/>    
        </div>
    )
}

export default Dashboard;