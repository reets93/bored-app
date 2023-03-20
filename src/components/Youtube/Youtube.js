import React from "react";
import SearchBar from "./SearchBar"
import API from "./API";
import VideoDetail from "./VideoDetail";
// import axios from "axios";

// const KEY = "AIzaSyDNe-EwKY81Imo8_AyAvMBnKbvaBYFqbNs";
class Youtube extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('stupid people');
        // axios.get({
        //     baseURL: "https://www.googleapis.com/youtube/v3",
        //     params: {
        //         part: "snippet",
        //         type: "video",
        //         key: KEY,
        //         q: "rolling in the deep"
        //     }
        // }).then(answers => {
        //     console.log(answers)
        // })
    }

    onTermSubmit = async (term) => {
        const results = await API.get("/search", {
            params: {
                q: term
            },
        });
        console.log(results)
        this.setState({
            videos: results.data.items,
            selectedVideo: results.data.items[0]
        });
    };

    // onVideoSelect = (video) => {
    //     this.setState({ selectedVideo: video });
    // }

    render() {
        return (
            <div id="#youtube-section" className="container">
                <SearchBar passingFunction={this.onTermSubmit} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Youtube;
