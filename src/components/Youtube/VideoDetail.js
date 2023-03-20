import React from 'react';
import "./videoDetail.css";

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='col-lg'>
            <div className="embed-responsive embed-responsive-3by4 video">
                <iframe className="embed-responsive-item" title="Video Player" src={videoURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="row">
                <h5 className="row">{video.snippet.title}</h5>
                <p className='row'>{video.snippet.description}</p>
            </div>
        </div>
    );
};
export default VideoDetail;