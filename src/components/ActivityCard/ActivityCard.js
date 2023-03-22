import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';
import { FaBinoculars } from "react-icons/fa";
import Button from 'react-bootstrap/Button'
import ExploreModal from '../Explore/ExploreModal';

function ActivityCard(props) {
    // For modal - setting state
    const [modalShow, setModalShow] = React.useState(false);

    return (   // activity card component
        <div className="activity-card">
            <div className="cardActivity">
                <img src={props.image} class="card-img" alt="" width="340px" height="240px"></img>
                <div className="card-main">
                    <h4 className="card-title">{props.type}</h4>
                    <p className="card-info">{props.activity}</p>
                    <div className="d-flex justify-content-center">
                        <>{/* Button links to explore modal*/}
                            <Button className='cardBtn' activity={props.activity} variant="primary" onClick={() => setModalShow(true)}>
                                Explore <FaBinoculars />
                            </Button>
                            <ExploreModal modalData={props}
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