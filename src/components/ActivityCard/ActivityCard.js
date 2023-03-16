import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';

function ActivityCard(props) {
    return (
        <div className="activity-card">
            <div className="card text-center bg-dark text-white">
                <img src={props.image} class="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h4 className="card-title">{props.type}</h4>
                    <p className="card-text">This is where the activity goes{props.activity}</p>
                    <button className='btn btn-primary'>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard