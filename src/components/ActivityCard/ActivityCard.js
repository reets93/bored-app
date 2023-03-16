import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';

function ActivityCard(props) {
    return (
        <div className="activity-card">
            <div className="card text-center bg-dark text-white">
                <img src="https://images.theconversation.com/files/366100/original/file-20201028-17-8cpm3p.jpg?ixlib=rb-1.1.0&rect=2589%2C92%2C3909%2C3909&q=45&auto=format&w=240&h=240&fit=crop" class="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h4 className="card-title">SOCIAL{props.type}{/* - create json for images*/}</h4>
                    <p className="card-text">Go see a movie in theaters with a few friends{props.activity}</p>
                    <button className='btn btn-primary'>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard