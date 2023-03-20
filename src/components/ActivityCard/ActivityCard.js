import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';
import { FaBinoculars } from "react-icons/fa";
import Button from 'react-bootstrap/button'
import ExploreModal from '../Explore/ExploreModal';

function ActivityCard(props) {
    // For modal - remove two consts below if not using Modal
    const [modalShow, setModalShow] = React.useState(false);
    const boredData = props.boredData

    return (
        <div id='activity-card' className="activity-card">
            <div className="card" >
                <img src={props.image} alt={props.key}
                    className="opacity-50" width="340px" height="240px"></img>
                <div className="card-img-overlay">
                    <h4 className="title">{props.type}</h4>
                    <p className="card-text">{props.activity}</p>
                    <div className="d-flex justify-content-center">
                        {/* <button className='btn btn-primary btn-default'> Explore <FaBinoculars /></button> */}
                        
                        
                        <>{/* for the explore modal button below. I'm wondering whether the details should be mapped somehow on the ActivityPage? OR whether this should be elsewhere in the code?*/}
                            <Button boredData={boredData} variant="primary" onClick={() => setModalShow(true)}>
                                Test-Explore
                            </Button>
                            <ExploreModal boredData={boredData}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </> {/* END Explore Modal */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard