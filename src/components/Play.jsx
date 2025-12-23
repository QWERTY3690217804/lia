import React, { useState } from 'react';
import play from '../assets/play.png';
import playUpdated from '../assets/playUpdated.png';
import { useNavigate } from 'react-router-dom';
import playSfx from '../assets/beep-329314.mp3';

function Play(props) {
    const [src, setSrc] = useState(play);
    const navigate = useNavigate();

    const handleClick = () => {
        const audio = new Audio(playSfx);
        audio.play();
        navigate('/dashboard');
    };

    return (
        <img src={src}
        alt ="play"
        onMouseEnter={() => setSrc(playUpdated)}
        onMouseLeave={() => setSrc(play)}
        onClick ={handleClick}
        style ={{width: 270, height: 260}}
        {...props} />
    )
}

export default Play;
