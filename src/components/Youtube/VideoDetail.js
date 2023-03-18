import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div class="embed-responsive embed-responsive-3by4">
                <iframe class="embed-responsive-item" title="Video Player" src={videoURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};
export default VideoDetail;