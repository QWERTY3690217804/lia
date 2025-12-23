import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import giraffe from '../assets/giraffe.png';
import cow from '../assets/cow.png';
import bear from '../assets/bear.png'
import Play from './Play';


function Layout() {
    return (
        <div className="layout-container">
            <Outlet />
            <div className="animal-container">
                <img src={giraffe} width={600} height={500} alt="cheeta"/>
                <img src={bear} width={600} height={500} alt="bear" />
                <img src={cow} width={600} height={500} alt="giraffe"/>
            </div>
        </div>
    )
}

export default Layout;