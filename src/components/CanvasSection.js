import React from 'react'
import '../App.css';
import './CanvasSection.css';
import robot from '../picture/robot.png';

function CanvasSection()
{
    return (
        <div className='canvas-container'>
            
            <div class='canvas-night'>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>     
                <div class="shooting_star"></div>   
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
            </div>
            
            <div className='canvas-content'>
                <h1 class='animated fadeInDown delay-05s'>Tran Huynh</h1>
                <p class='subtitle animated fadeInUp delay-05s'>
                    - Artificial Intelligence Robotic/Cyber Security Researcher -
                </p>
                <br></br>
                <p>
                <img alt="robot" className="robot-photo" src={robot} />    
                </p>
            </div>
        </div>
        
    )
}

export default CanvasSection;