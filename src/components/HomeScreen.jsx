import React, { useState } from 'react';
import './HomeScreen.css';
import giraffe from '../assets/giraffe.png';
import cow from '../assets/cow.png';
import bear from '../assets/bear.png'
import title from '../assets/title.png';
import subtitle from '../assets/subtitle.png'
import Play from './Play';

function HomeScreen() {
    return (
        <div className="home-container">
            <img src={title} />
            <img src={subtitle} />
            {/* <img src={subtitle} /> */}
            <Play/>
        </div>
    )
}

export default HomeScreen;