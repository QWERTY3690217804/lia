import React from 'react';
import {Outlet} from 'react-router-dom';
import './Dashboard.css';
import giraffePre from '../assets/giraffePre.png';
import wh from '../assets/wh.png';
import pronouns from '../assets/pronouns.png';
import title from '../assets/title.png';
import subtitle from '../assets/subtitle.png'
import intro from '../assets/intro.png'
import Play from './Play';

const images = [
    { src: wh, id: 1},
    { src: pronouns, id: 2},
    { src: cow, id: 3},
    { src: bear, id: 4},
    { src: cow, id: 5}
];

function Dashboard() {
    const handleClick = (id) => {
        console.log('Clicked: ', id)
    }
    return (
        <div>
            <img src={giraffePre} width={900}/>  
            <div className="grid-container">
                {images.map(({src, id}) => (
                    <button
                        key={id}
                        className="grid-item"
                        onClick={() => handleClick(id)}>
                            <img src={src}/>
                    </button>
                ))}
            </div>  
        </div>
    )
}

export default Dashboard;