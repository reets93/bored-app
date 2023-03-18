import React from "react";
import SearchBar from "./SearchBar"
import API from "./API";
import VideoDetail from "./VideoDetail";

class Youtube extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('funny cats');
    }

    onTermSubmit = async (term) => {
        const results = await API.get("/search", {
            params: {
            q: term
            },
        });
        this.setState({ 
            videos: results.data.items,
            selectedVideo: results.data.items[0] 
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
    return (
        <div className="ui container">
            <SearchBar onSearchCallback={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Youtube;
