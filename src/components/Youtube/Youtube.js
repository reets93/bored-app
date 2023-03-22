import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar"
import API from "./API";
import VideoDetail from "./VideoDetail";


function Youtube(props){
    console.log(props)
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    
    useEffect(() => {
        console.log("running")
        onTermSubmit(props.search);
        console.log("running 43")
    }, [])

    const onTermSubmit = async (term) => {
        console.log("run")
        const results = await API.get("/search", {
            params: {
                q: term
            },
        });
        console.log(results)
        setVideos(results.data.items)
        setSelectedVideo(results.data.items[0])
        return
    };

   return (
            <div id="#youtube-section" className="container">
                <SearchBar onTermSubmit={onTermSubmit} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            {console.log(selectedVideo)}
                            {selectedVideo ? <VideoDetail video={selectedVideo} /> : ""}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Youtube;
