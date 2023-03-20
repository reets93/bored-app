import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';
import { FaBinoculars } from "react-icons/fa";

function ActivityCard(props) {
    return (
        <div id='activity-card'className="activity-card">
            <div className="card" >
                <img src={props.image} alt=""
                className="opacity-50" width = "340px" height = "240px"></img>
                <div className="card-img-overlay">
                    <h4 className="title">{props.type}</h4>
                    <p className="card-text">{props.activity}</p>
                    <div className="d-flex justify-content-center">
                    <button className='btn btn-primary btn-default'> Explore <FaBinoculars /></button>
                   </div>
                </div>
                </div>
            </div>
    )
}

export default ActivityCard