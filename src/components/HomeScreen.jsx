import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import './HomeScreen.css';
import giraffe from '../assets/giraffe.png';
import cow from '../assets/cow.png';
import bear from '../assets/bear.png'
import title from '../assets/title.png';
import subtitle from '../assets/subtitle.png'
import PlayButton from './PlayButton';

function HomeScreen() {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <img src={title} />
            <img src={subtitle} />
            {/* <img src={subtitle} /> */}
            <PlayButton onClick={() => navigate('/dashboard')} />
        </div>
    )
}

export default HomeScreen;