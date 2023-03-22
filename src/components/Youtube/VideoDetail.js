import React from 'react';
import "./videoDetail.css";

// function to use the selected video details and return render them on the component
function VideoDetail(props) { //selected video details passed as props

    //building the video src from the videoId
    const videoURL = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    // render method xjs
    return (
        <div className='col-lg'>
            <div className="embed-responsive embed-responsive-3by4 video">
                <iframe className="embed-responsive-item" title="Video Player" src={videoURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="row">
                <h5 className="row">{props.video.snippet.title}</h5>
                <p className='row'>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;