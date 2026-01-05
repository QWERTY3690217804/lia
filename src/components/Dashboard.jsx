import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import giraffePre from '../assets/giraffePre.png';

// buttons for games
import wh from '../assets/wh.png';
import pronouns from '../assets/pronouns.png';
import reciprocal from '../assets/reciprocal.png';
import safety from '../assets/safety.png';
import zones from '../assets/zones.png';

import PlayButton from './PlayButton'

const images = [
    { src: wh, id: 1},
    { src: pronouns, id: 2},
    { src: reciprocal, id: 3},
    { src: safety, id: 4},
    { src: zones, id: 5}
];

function Dashboard() {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/dashboard/${slug}`);
    };
    return (
        <div>
            <img src={giraffePre} width={900}/>  
            <div className="grid-container">
                {images.map(({ src, id, slug, alt }) => (
                    <button
                        key={id}
                        className="grid-item"
                        onClick={() => handleClick(slug)}
                        aria-label={`Open game ${slug}`}
                    >
                        <img src={src} alt={alt} />
                    </button>
                    ))}
            </div>  
            <Outlet />
        </div>
    )
}

export default Dashboard;