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
    // console.log("PROPS", props)
    return (
        <div className="activity-card">
        <div className="cardActivity">
         <img src={props.image} class="card-img" alt="" width="340px" height="240px"></img>
         <div className="card-main">
         <h4 className="card-title">{props.type}</h4>
         <p className="card-info">{props.activity}</p>
         <div className="d-flex justify-content-center">
                        {/* <button className='btn btn-primary btn-default'> Explore <FaBinoculars /></button> */}
                        
                        
                        <>{/* for the explore modal button below. I'm wondering whether the details should be mapped somehow on the ActivityPage? OR whether this should be elsewhere in the code?*/}
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