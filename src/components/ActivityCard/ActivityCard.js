import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';
import { FaBinoculars } from "react-icons/fa";

function ActivityCard(props) {
    return (
        <div id='activity-card'className="activity-card">
            <div className="card" >
                <img src={props.image} 
                className="opacity-50"></img>
                <div className="card-img-overlay">
                    <h4 className="title">{props.type}</h4>
                    <p className="card-text">{props.activity}</p>
                    <button className='btn btn-primary'>Explore <FaBinoculars /></button>
                </div>
                </div>
            </div>
    )
}

export default ActivityCard