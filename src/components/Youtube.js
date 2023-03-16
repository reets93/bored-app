import React, {useState} from "react";
import Axios from "axios";

function Youtube() {
const [video ,setVideo] = useState("");
const youtubeAPI = "AIzaSyDGCWZu84Wo1O7MmVU6sHP67CzIOQyaz_E"
let search = "react app with axios";
const getVideo = () => {
const URL = "https://www.googleapis.com/youtube/v3/search?key="+ youtubeAPI +"&q="+ search +"&part=snippet&type=video&regionCode=uk"
  Axios.get(URL)
  .then((response)=>{
    console.log(response);
    setvideo(response.data.activity);
  });
}
  return(
    <div class="video" id="video${i+1}">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  ) ;
}
export default Youtube ;