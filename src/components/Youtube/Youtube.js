import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar"
import API from "./API";
import VideoDetail from "./VideoDetail";

// youtube function using props from the modal components and passing props to the searchbar component
function Youtube(props) {
    // selectedVideo state definiton and initialisation
    const [selectedVideo, setSelectedVideo] = useState(null);

    //useEffect hook to render the first search when the explore modal button explore is clicked
    useEffect(() => {
        onTermSubmit(props.search); //search the chosen activity video
    }, [props.search])

    // Youtube Api request
    const onTermSubmit = async (term) => {
        console.log("run")
        const results = await API.get("/search", {
            params: {
                q: term
            },
        });
        //update the selected video state with the first video details from the results
        setSelectedVideo(results.data.items[0])
    };
    // render function
    return (
        <div id="#youtube-section" className="container">
            {/* //passing the onTermSubmit as props to the SearchBar  */}
            <SearchBar onTermSubmit={onTermSubmit} />
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        {/* if the selectedvideo is not available yet, do nothing */}
                        {selectedVideo ? <VideoDetail video={selectedVideo} /> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youtube;
